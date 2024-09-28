import { CategoryDistributionEntity } from "../entities/CategoryDistributionEntity";

export interface ICategoryEnrollmentDistributionUseCase {
    execute:() => Promise<CategoryDistributionEntity[] | null>
}