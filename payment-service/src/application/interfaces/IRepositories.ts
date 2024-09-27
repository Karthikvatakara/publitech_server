import { chatEntity } from "../../domain/entities/chatEntity";
import { PaymentEntity } from "../../domain/entities/paymentEntity";
import { subscriptionPaymentEntity } from "../../domain/entities/subscriptionPaymentEntity";
import { PaymentPopulatedEntity } from "../../domain/entities/PaymentPopulatedEntity";

export interface IRespositories {
    savePayment:( data:PaymentEntity) => Promise<PaymentEntity | null>
    createSubscriptionPayment:( data:subscriptionPaymentEntity ) => Promise< subscriptionPaymentEntity | null>
    getAllCoursePayments:( page: number, limit: number, status: string, search: string ) => Promise<{ payments: PaymentEntity[], totalPages: number, totalCount: number }>
    getAllSubscriptionPayment:( page: number, limit: number, status: string, search: string) => Promise<{subscriptions: subscriptionPaymentEntity[], totalPages: number, totalCount: number}>
    saveChat:( data: { userId: string, instructorRef: string }) => Promise<chatEntity | null>
    getUserCoursePayments:( page: number, limit: number, status: string, search: string, userId: string) => Promise<{ payments: PaymentEntity[],totalPages: number, totalCount: number}>
    getTotalPayments:() => Promise<number|null>
    getTotalRevenue:() => Promise<PaymentPopulatedEntity[] | null>
    getTotalPaymentsForInstructor:( instructorId: string ) =>  Promise<number |null>
}