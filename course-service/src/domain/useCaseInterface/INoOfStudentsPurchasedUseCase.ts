
export interface INoOfStudentsPurchasedUseCase {
    execute:(instructorId: string) => Promise<number | null>
}