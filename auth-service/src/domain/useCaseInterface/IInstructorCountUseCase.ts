export interface IInstructorCountUseCase {
    execute(): Promise<number | null>
}