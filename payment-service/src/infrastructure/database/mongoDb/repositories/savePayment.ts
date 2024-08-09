import { PaymentEntity } from "../../../../domain/entities/paymentEntity"
import { Payment } from "../models/payment"

export const savePayment = async(data:PaymentEntity): Promise< PaymentEntity | null> => {
    try{
        console.log(data,"it is reached in the repo in the payment repository")
        const payment = await Payment.create(data);
        return payment;
    }catch(error){
        throw new Error((error as Error)?.message)
    }
}