import { IDependencies } from "../interfaces/IDependency";

export const findAppliedInstructrosUseCase = (dependency:IDependencies) => {
    const { repositories:{ findAppliedInstructor }} = dependency;

    return {
        execute:async(page: number, limit: number, status: string, search: string) => {
            try{
                return await findAppliedInstructor(page,limit,status,search)
            }catch(error){
                console.error(error,"error in the find appliedinstructors usecase")
                throw new Error((error as Error)?.message)
            }
        }
    }
}