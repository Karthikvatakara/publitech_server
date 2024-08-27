import { IDependencies } from "../interfaces/IDependency";

export const getAllCoursesExamCreationUseCase = ( dependencies: IDependencies ) => {
    const { repositories: { getAllCoursesExamCreation }} = dependencies;

    return {
        execute:async( instructorRef: string) => {
            try{
                return await getAllCoursesExamCreation(instructorRef);
            }catch(error){
                throw new Error((error as Error)?.message);
            }
        }
    }
}