import { User } from "../models/User";

export const studentsCount = async() => {
    try{
        const allStudents = await User.countDocuments({role:"student"})

        if(!allStudents) {
            throw new Error("instructors not exist");
        };

        return allStudents;
    }catch(error){
        throw new Error((error as Error)?.message);
    }
}