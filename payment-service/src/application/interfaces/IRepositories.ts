import { PaymentEntity } from "../../domain/entities/paymentEntity";
import { subscriptionPaymentEntity } from "../../domain/entities/subscriptionPaymentEntity";

export interface IRespositories {
    savePayment:( data:PaymentEntity) => Promise<PaymentEntity | null>
    createSubscriptionPayment:( data:subscriptionPaymentEntity ) => Promise< subscriptionPaymentEntity | null>
    getAllCoursePayments:( page: number, limit: number, status: string, search: string ) => Promise<{ payments: PaymentEntity[], totalPages: number, totalCount: number }>
    getAllSubscriptionPayment:( ) => Promise<subscriptionPaymentEntity[] | null>
}