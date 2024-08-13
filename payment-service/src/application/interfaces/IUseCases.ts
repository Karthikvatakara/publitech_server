import { ISavePaymentUseCase, ISubscriptionPaymentUseCase } from "../../domain/useCaseInterface";
import { IDepencencies } from "./IDependency";

export interface IUseCases {
    savePaymentUseCase:(dependencies:IDepencencies) => ISavePaymentUseCase;
    subscriptionPaymentUseCase:(dependencies: IDepencencies) => ISubscriptionPaymentUseCase;
}