import { IDependencies } from "../interfaces/IDependency";

export const getCoursesToUserUseCase = (dependencies:IDependencies) => {
    const { repositories: { getCoursesToUser }} = dependencies;

    return {
        execute:async( params: { search?: string, category?: string, sort?: string, page: number, limit: number}) => {
            try{
                return await getCoursesToUser(params)
            }catch(error){
                throw new Error((error as Error)?.message || "error occured in the getCoursesToUserUseCase")
            }
        }
    }
}