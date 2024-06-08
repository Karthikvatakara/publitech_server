import { IRespositories } from "./IRepositories";
import { IUseCases } from "./IUseCases";

export interface IDependencies {
    useCases: IUseCases;
    repositories:IRespositories;
}