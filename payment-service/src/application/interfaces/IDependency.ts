import { IUseCases } from "./IUseCases";
import { IRespositories } from "./IRepositories";

export interface IDepencencies {
    useCases: IUseCases,
    repositories: IRespositories
}