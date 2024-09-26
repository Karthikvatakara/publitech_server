import { PaymentEntity } from "../../domain/entities/paymentEntity";
import { IDepencencies } from "../interfaces/IDependency";

export const savePaymentUseCase = (dependencies:IDepencencies) => {
    const { repositories:{ savePayment }} = dependencies;
    return {
        execute:async(data:PaymentEntity) => {
            try{    
                return await savePayment(data);
            }catch(error){
                throw new Error((error as Error)?.message);
            }
        }
    }
}