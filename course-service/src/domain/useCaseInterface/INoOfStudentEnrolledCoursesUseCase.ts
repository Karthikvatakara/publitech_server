export interface INoOfStudentEnrolledCoursesUseCase {
    execute:( userId: string) => Promise<number | null>
}