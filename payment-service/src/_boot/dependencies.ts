import * as useCases from "../application/useCases/index";
import * as repositories from "../infrastructure/database/mongoDb/repositories/index"

export const dependencies = {
    useCases,
    repositories
}