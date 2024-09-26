import { IDependencies } from "../interfaces/IDependency";

export const getallInstructorsUseCase = (dependecies:IDependencies)=>{
    const { repositories:{ getallInstructors } } = dependecies;

    return {
        execute:async( page: number, limit: number, status: string, search: string) => {
            try{
                return await getallInstructors(page, limit, status, search)
            }catch(error){
                throw new Error((error as Error)?.message)
            }
        }
    }
}