import { IDependencies } from "../interfaces/IDependency";

export const getAllStudentsUseCase = (dependecies: IDependencies) => {
    const { repositories: { getAllStudents }} = dependecies;

    return {
        execute:async( page: number, limit: number, status: string, search: string ) => {
            try{
                return await getAllStudents( page, limit, status, search)
            }catch(error){  
                throw new Error((error as Error)?.message)
            }
        }
    }
}