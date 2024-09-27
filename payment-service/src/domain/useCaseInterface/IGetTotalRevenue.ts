import { PaymentPopulatedEntity } from "../entities/PaymentPopulatedEntity"

export interface IGetTotalRevenue {
    execute:() => Promise<PaymentPopulatedEntity[] | null>
}