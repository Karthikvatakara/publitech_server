import { IDependencies } from "../interfaces/IDepencencies";


export const updatePasswordUseCase = (dependencies:IDependencies) => {
    const { repositories: { updatePassword }} = dependencies;
    return {
    execute:async(email:string,password:string) => {
        console.log("🚀 ~ execute:async ~ password:in usecase", password)
        console.log("🚀 ~ execute:async ~ email: usecase", email)
        try{
            
           return await updatePassword(email,password)
        }catch(error:any){
            throw new Error(error || "update password failed")
        }
    }
}
}