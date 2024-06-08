import { IDependencies } from "../application/interfaces/IDepencencies";
import * as repositories from "../infrastructure/database/mongoDb/repositories";
import * as useCases from "../application/useCases";

export const dependencies:IDependencies = {
    repositories,
    useCases
}