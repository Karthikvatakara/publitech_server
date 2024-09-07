import { IDepencencies } from "../interfaces/IDependency";

export const getUserCoursePaymentsUseCase = ( dependencies: IDepencencies ) => {
    const { repositories: { getUserCoursePayments }} = dependencies;

    return {
        execute:async( page: number, limit: number, status: string, search: string, userId: string ) => {
            try{
                return await getUserCoursePayments( page, limit, status, search, userId);
            }catch(error){
                throw new Error((error as Error)?.message);
            }
        }
    }
}