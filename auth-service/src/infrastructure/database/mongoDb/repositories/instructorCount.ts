import { User } from "../models/User";

export const instructorCount = async() => {
    try{
        const instructors = await User.countDocuments({role:"instructor"})

        if(!instructors) {
            throw new Error("instructors not exist");
        };

        return instructors;
    }catch(error){
        throw new Error((error as Error)?.message);
    }
}