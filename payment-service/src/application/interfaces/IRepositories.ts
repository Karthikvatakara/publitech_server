import { PaymentEntity } from "../../domain/entities/paymentEntity";

export interface IRespositories {
    savePayment:(data:PaymentEntity) => Promise<PaymentEntity | null>
}