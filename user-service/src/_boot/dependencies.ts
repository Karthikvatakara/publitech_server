import { IDependencies } from "../application/interfaces/IDependency";
import * as repositories from "../infrastructure/database/mongoDb/repositories";
import * as useCases from "../application/useCases";


export const dependecies:IDependencies = {
    repositories,
    useCases
}