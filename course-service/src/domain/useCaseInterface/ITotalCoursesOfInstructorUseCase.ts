export interface ITotalCoursesOfInstructorUseCase {
    execute:( userId: string ) => Promise<number | null>
}