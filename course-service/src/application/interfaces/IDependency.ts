import { IUseCases } from "./IUseCases";
import { IRespositories } from "./IRepositories";

export interface IDependencies {
    useCases: IUseCases,
    repositories: IRespositories
}