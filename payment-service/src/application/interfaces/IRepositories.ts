import { PaymentEntity } from "../../domain/entities/paymentEntity";
import { subscriptionPaymentEntity } from "../../domain/entities/subscriptionPaymentEntity";

export interface IRespositories {
    savePayment:( data:PaymentEntity) => Promise<PaymentEntity | null>
    createSubscriptionPayment:( data:subscriptionPaymentEntity ) => Promise< subscriptionPaymentEntity | null>
}