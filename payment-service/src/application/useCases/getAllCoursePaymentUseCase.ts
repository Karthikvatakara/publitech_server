import { IDepencencies } from "../interfaces/IDependency";

export const getAllCoursePaymentUseCase = ( dependencies: IDepencencies ) => {
    const { repositories: { getAllCoursePayments }} = dependencies;

    return {
        execute:async( page: number, limit: number, status: string, search: string ) => {
            try{
                return await getAllCoursePayments( page, limit, status, search);
            }catch(error){
                throw new Error((error as Error)?.message);
            }
        }
    }
}