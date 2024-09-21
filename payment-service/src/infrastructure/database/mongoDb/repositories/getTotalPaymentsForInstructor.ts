import { chat } from "../models/chat";
import { Payment } from "../models/payment";
import { subscriptionPayment } from "../models/subscriptionPayment";

export const getTotalPaymentsForInstructor = async( instructorId: string ) => {
    try{
        const totalPaymentsOfCourses = await Payment.aggregate([
            {$match: {instructorRef: instructorId, status: "completed" }},
            {$group: { _id: null, totalAmount: { $sum: "$amount"}}}
        ]);

        const coursePayment = totalPaymentsOfCourses[0]?.totalAmount || 0;

        const chatWithInstructor = await chat.find({ users: instructorId }).select("_id");

        const chatIds = chatWithInstructor.map((chat) => chat._id);

        if(chatIds.length === 0) {
            return coursePayment;
        }

       const subscriptionAmount = await subscriptionPayment.aggregate([
        {$match: { chatId: {$in: chatIds}, status: 'completed'}},
        {$group: {_id: null, totalAmount:{$sum:"$amount"}}}
       ])

       const totalSubscriptionAmount = subscriptionAmount[0]?.totalAmount || 0;

       const totalAmount = coursePayment+totalSubscriptionAmount;

       return totalAmount;
    }catch(error) {
        throw new Error((error as Error)?.message)
    }
}