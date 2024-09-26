import { PaymentEntity } from "../entities/paymentEntity";

export interface IGetUserCoursePaymentUseCase {
    execute:( page: number, limit: number, status: string, search: string, userId: string ) => Promise<{ payments: PaymentEntity[], totalPages: number, totalCount: number }>
}