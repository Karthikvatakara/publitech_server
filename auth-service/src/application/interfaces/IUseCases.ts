import { ISignupUserUseCase,IFindByEmailUseCase,IverifyOtpUseCase,IFindUserByIdUseCase,ILogininterfaceUseCase,IApplyToTeachUseCase } from "../../domain/useCaseInterface"
import { IDependencies } from "./IDepencencies";

export interface IUseCases {
    signupUserUseCase:(dependencies: IDependencies) =>ISignupUserUseCase;
    findByEmailUseCase:(dependecies:IDependencies) => IFindByEmailUseCase;
    verifyOtpUseCase:(dependencies:IDependencies) => IverifyOtpUseCase;
    findUserByIdUseCase:(dependencies:IDependencies) => IFindUserByIdUseCase;
    loginUseCase:(dependencies:IDependencies) => ILogininterfaceUseCase;
    applyToTeahcUseCase:(dependecies:IDependencies) => IApplyToTeachUseCase

}