import * as repositories from "../infrastructure/database/mongoDb/repositories";
import * as useCases from "../application/useCases"
import { IDependency } from "../application/interfaces/IDependency";

export const dependencies: IDependency = {
    repositories,
    useCases
}