import { Payment } from "../models/payment";
import { subscriptionPayment } from "../models/subscriptionPayment";

export const getTotalPayments = async( ) => {
    try{
        const paymentResult = await Payment.aggregate([
            { $match: { status:'completed'} },
            { $group: { _id: null, totalAmount: { $sum: '$amount'}}}
        ])

        const subscriptionPaymentResult = await subscriptionPayment.aggregate([
            { $match: { status: 'completed'} },
            { $group: { _id: null, totalAmount: { $sum:'$amount'}}}
        ])

        const paymentSum = paymentResult.length > 0 ? paymentResult[0].totalAmount : 0;
        const subscritpionSum = subscriptionPaymentResult.length > 0 ? subscriptionPaymentResult[0].totalAmount : 0;

        const totalSum = paymentSum+subscritpionSum;

        return totalSum;
    }catch(error){
        throw new Error((error as Error)?.message);
    }
}