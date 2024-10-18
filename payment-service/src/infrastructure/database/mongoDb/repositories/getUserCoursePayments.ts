import { PaymentEntity } from "../../../../domain/entities/paymentEntity";
import { course } from "../models/course";
import { Payment } from "../models/payment";
import { User } from "../models/User";

export const getUserCoursePayments = async (page: number, limit: number, status: string, search: string, userId: string): Promise<{ payments: any[], totalPages: number, totalCount: number }> => {
  try {
    let query: any = {};

    query.userId = userId;
    console.log("🚀 ~ getUserCoursePayments ~ userId:", userId)
  
    if (status && ["completed", "pending", "failed"].includes(status)) {
      query.status = status;
    }
    

    if (search) {
      const courseIds = await course.find({
        title: { $regex: search, $options: "i" }
      }).distinct('_id');

      const instructorIds = await User.find({
        username: { $regex: search, $options: "i" }
      }).distinct('_id');

      query.$or = [
        { courseId: { $in: courseIds } },
        { instructorRef: { $in: instructorIds } }
      ];
    }

    const totalCount = await Payment.countDocuments(query);
    const totalPages = Math.ceil(totalCount / limit);

    const getAllCoursePayments:any = await Payment.find(query)
      .populate({
        path: 'courseId',
        model: 'courses',
        select: 'title description'
      })
      .populate({
        path: 'instructorRef',
        model: 'users',
        select: 'username email'
      })
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ createdAt: -1 }) 
      .lean();
    console.log("🚀 ~ getUserCoursePayments ~ getAllCoursePayments:", getAllCoursePayments)

    return { payments: getAllCoursePayments, totalPages, totalCount };
  } catch (error) {
    throw new Error((error as Error)?.message);
  }
};
