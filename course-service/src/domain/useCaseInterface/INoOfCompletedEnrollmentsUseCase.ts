export interface INoOfCompletedEnrollmentsUseCase {
    execute:( userId: string )=> Promise<number | null>
}
