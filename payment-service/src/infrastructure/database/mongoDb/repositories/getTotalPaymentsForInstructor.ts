import { chat } from "../models/chat";
import { Payment } from "../models/payment";
import { subscriptionPayment } from "../models/subscriptionPayment";

export const getTotalPaymentsForInstructor = async( instructorId: string ) => {
    console.log("🚀 ~ getTotalPaymentsForInstructor ~ instructorId: in the repository", instructorId)
    try{
        const totalPaymentsOfCourses = await Payment.aggregate([
            {$match: {instructorRef: instructorId, status: "completed" }},
            {$group: { _id: null, totalAmount: { $sum: "$amount"}}}
        ]);
        console.log("🚀 ~ getTotalPaymentsForInstructor ~ totalPaymentsOfCourses:", totalPaymentsOfCourses)

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
       console.log("🚀 ~ getTotalPaymentsForInstructor ~ subscriptionAmount:", subscriptionAmount)

       const totalSubscriptionAmount = subscriptionAmount[0]?.totalAmount || 0;

       const totalAmount = coursePayment+totalSubscriptionAmount;
       console.log("🚀 ~ getTotalPaymentsForInstructor ~ totalAmount:", totalAmount)

       return totalAmount;
    }catch(error) {
        throw new Error((error as Error)?.message)
    }
}