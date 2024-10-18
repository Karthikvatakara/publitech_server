import { IDepencencies } from "../../../../application/interfaces/IDependency";
import { PaymentEntity } from "../../../../domain/entities/paymentEntity";
import { Payment } from "../models/payment";
import { Types } from 'mongoose';
import { User } from "../models/User";

export const getAllCoursePayments = async(
  page: number, 
  limit: number, 
  status: string, 
  search: string
): Promise<{ payments: any[], totalPages: number, totalCount: number }> => {
  try {
    let query: any = {}

    if (status && ["completed", "failed", "pending"].includes(status)) {
      query.status = status;
    }

    if (search) {
      // First, find user IDs that match the search term
      const userIds = await User.find({
        username: { $regex: search, $options: "i" }
      }).distinct('_id');

      // Then, use these IDs in the main query
      query.$or = [
        { userId: { $in: userIds } },
        { instructorRef: { $in: userIds } }
      ];
    }

    const totalCount = await Payment.countDocuments(query);
    const totalPages = Math.ceil(totalCount / limit);

    const getAllCoursePayments:any = await Payment.find(query)
      .populate({
        path: 'userId',
        model: 'users',
        select: 'username email -_id'
      })
      .populate({
        path: 'instructorRef',
        model: 'users',
        select: 'username email -_id'
      })
      .skip((page - 1) * limit)
      .limit(limit)
      .lean();

    return { payments: getAllCoursePayments, totalPages, totalCount };
  } catch(error) {
    throw new Error((error as Error)?.message);
  }
}