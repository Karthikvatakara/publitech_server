import { User } from "../models/User";

export const findInstructorById = async( instructorId: string ) => {
    console.log("🚀 ~ findInstructorById ~ instructorId:repository", instructorId)
    try{
        const instructor = await User.findById( instructorId );
        console.log("🚀 ~ findInstructorById ~ instructor:", instructor)

        return instructor;
    }catch(error){  
        throw new Error((error as Error)?.message);
    }
}