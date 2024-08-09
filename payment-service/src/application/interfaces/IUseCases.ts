import { ISavePaymentUseCase } from "../../domain/useCaseInterface";
import { IDepencencies } from "./IDependency";

export interface IUseCases {
    savePaymentUseCase:(dependencies:IDepencencies) => ISavePaymentUseCase;
}