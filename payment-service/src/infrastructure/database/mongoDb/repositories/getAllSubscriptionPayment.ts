import { IDepencencies } from "../../../../application/interfaces/IDependency";
import { subscriptionPayment } from "../models/subscriptionPayment";

export const getAllSubscriptionPayment = async() => {
    try{
        const allSubscription = await subscriptionPayment.aggregate([
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
        }
        ])
        
        return allSubscription;
    }catch(error) {
        throw new Error((error as Error)?.message)
    }
}