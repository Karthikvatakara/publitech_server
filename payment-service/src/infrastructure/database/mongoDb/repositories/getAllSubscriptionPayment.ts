import { IDepencencies } from "../../../../application/interfaces/IDependency";
import { subscriptionPaymentEntity } from "../../../../domain/entities/subscriptionPaymentEntity";
import { subscriptionPayment } from "../models/subscriptionPayment";
import { User } from "../models/User";
import { Types } from "mongoose";

export const getAllSubscriptionPayment = async (
  page: number,
  limit: number,
  status: string,
  search: string
) :Promise<{ subscriptions: subscriptionPaymentEntity[], totalPages: number, totalCount: number}> => {
  console.log("🚀 ~ limit:", limit)
  console.log("🚀 ~ page:", page)
  try {
    let query: any = {};

    // Status filter
    if (status && ["completed", "pending", "failed"].includes(status)) {
      query.status = status;
    }

    // Search filter
    if (search) {
      const userIds = await User.find({
        username: { $regex: search, $options: "i" }
      }).distinct('_id');

      query.$or = [
        { userId: { $in: userIds } },
        { instructorRef: { $in: userIds } }
      ];
    }

    // Calculate pagination
    const skip = (page - 1) * limit;
    console.log("🚀 ~ skip:", skip)

    // Get total count for pagination
    const totalCount = await subscriptionPayment.countDocuments(query);
    const totalPages = Math.ceil(totalCount / limit);

    // Main aggregation pipeline
    const allSubscription = await subscriptionPayment.aggregate([
      { $match: query },
      {
        $lookup: {
          from: "chats",
          localField: "chatId",
          foreignField: "_id",
          as: "chatDetails"
        }
      },
      { $unwind: "$chatDetails" },
      {
        $lookup: {
          from: "users",
          localField: "chatDetails.users",
          foreignField: "_id",
          as: "participants"
        }
      },
      {
        $project: {
          userId: 1,
          chatId: 1,
          method: 1,
          status: 1,
          amount: 1,
          subscriptionType: 1,
          chatDetails: {
            isGroupChat: 1,
            groupName: 1,
            subscriptionType: 1
          },
          participants: {
            _id: 1,
            username: 1
          }
        }
      },
      { $skip: skip },
      { $limit: limit }
    ]);

    return {
      subscriptions: allSubscription,
      totalPages: totalPages,
      totalCount: totalCount
    };
  } catch (error) {
    throw new Error((error as Error)?.message);
  }
};