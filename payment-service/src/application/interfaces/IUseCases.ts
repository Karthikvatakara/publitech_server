import { ISavePaymentUseCase, ISubscriptionPaymentUseCase, 
    IGetAllCoursePaymentUseCase, IGetAllSubscriptionPaymentUseCase } from "../../domain/useCaseInterface";
import { IDepencencies } from "./IDependency";

export interface IUseCases {
    savePaymentUseCase:(dependencies:IDepencencies) => ISavePaymentUseCase;
    subscriptionPaymentUseCase:(dependencies: IDepencencies) => ISubscriptionPaymentUseCase;
    getAllCoursePaymentUseCase:( dependencies: IDepencencies ) => IGetAllCoursePaymentUseCase;
    getAllSubscriptionPaymentUseCase: ( dependencies: IDepencencies ) => IGetAllSubscriptionPaymentUseCase;
}