import { PaymentEntity } from "../entities/paymentEntity";

export interface IGetAllCoursePaymentUseCase {
    execute:( page: number, limit: number, status: string, search: string ) => Promise<{ payments: PaymentEntity[], totalPages: number, totalCount: number }>
}