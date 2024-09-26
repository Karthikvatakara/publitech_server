import { IRepository } from "./IRepository";
import { IUseCases } from "./IUseCases";

export interface IDependency {
    useCases: IUseCases,
    repositories: IRepository
}