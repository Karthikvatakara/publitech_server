export interface IStudentUseCaseInterface {
    execute(): Promise<number | null>
}