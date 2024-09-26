import { subscriptionPaymentEntity } from "../entities/subscriptionPaymentEntity";

export interface IGetAllSubscriptionPaymentUseCase {
    execute:( page: number, limit: number, status: string, search: string ) => Promise<{subscriptions: subscriptionPaymentEntity[], totalPages: number, totalCount: number}>
}