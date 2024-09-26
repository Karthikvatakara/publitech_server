export interface ICategoryEnrollmentDistributionUseCase {
    execute:() => Promise<{ category: string; percentage: number }[]>
}