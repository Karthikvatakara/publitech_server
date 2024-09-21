export interface IGetTotalPaymentsForInstructorUseCase {
    execute: (instructorId: string ) => Promise<number | null>
}