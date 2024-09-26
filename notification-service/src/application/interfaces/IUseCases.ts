import { IDependencies } from "./IDependencies";
import { ISaveFcmTokenUseCase } from "../../domain/useCaseInterface";

export interface IUseCases {
    saveFcmTokenUseCase:(dependencies: IDependencies ) => ISaveFcmTokenUseCase
}