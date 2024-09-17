import { IDependencies } from "../application/interfaces/IDependencies";
import * as useCases from "../application/useCases/index";
import * as repositories from "../infrastructure/database/repositories/index"

export const dependencies: IDependencies = {
    useCases,
    repositories
};