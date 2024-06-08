import * as bcrypt from "bcrypt";


export const hashPassword = async(password: string): Promise<string> => {
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPasword = await bcrypt.hash(password,salt);
        if(!hashedPasword) {
            throw new Error("hashing password error")
        }
        console.log(password,hashedPasword,"it is the password and the hashed password");
        
        return hashedPasword;
    }catch(error:any){
        throw new Error(error?.message)
    }
}