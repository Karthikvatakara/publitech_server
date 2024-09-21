import { ISavePaymentUseCase, ISubscriptionPaymentUseCase, 
    IGetAllCoursePaymentUseCase, IGetAllSubscriptionPaymentUseCase, ISaveChatUseCase,
    IGetUserCoursePaymentUseCase , IGetTotalPayments, IGetTotalRevenue, IGetTotalPaymentsForInstructorUseCase} from "../../domain/useCaseInterface";
import { IDepencencies } from "./IDependency";

export interface IUseCases {
    savePaymentUseCase:(dependencies:IDepencencies) => ISavePaymentUseCase;
    subscriptionPaymentUseCase:(dependencies: IDepencencies) => ISubscriptionPaymentUseCase;
    getAllCoursePaymentUseCase:( dependencies: IDepencencies ) => IGetAllCoursePaymentUseCase;
    getAllSubscriptionPaymentUseCase: ( dependencies: IDepencencies ) => IGetAllSubscriptionPaymentUseCase;
    saveChatUseCase: ( dependencies: IDepencencies ) => ISaveChatUseCase;
    getUserCoursePaymentsUseCase: ( dependencies: IDepencencies ) => IGetUserCoursePaymentUseCase;
    getTotalPaymentsUseCase:( dependencies: IDepencencies ) => IGetTotalPayments;
    getTotalRevenueUseCase:( depenedencies: IDepencencies ) => IGetTotalRevenue
    getTotalPaymentsForInstructorUseCase:( dependencies: IDepencencies) => IGetTotalPaymentsForInstructorUseCase
}