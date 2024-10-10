import { User } from "../models/User";
import { UserEntity } from "../../../../domain/entities/userEntity";

export const getallInstructors = async( page: number, limit: number, status: string, search: string):Promise<{ instructors: UserEntity[], totalPages:number, totalCount: number}> => {
    try{
        const query: any = { role: "instructor" }

        if(status === "blocked") {
            query.isBlocked = true;
        } else if(status === "unblocked") {
            query.isBlocked = false;
        }

        if(search) {
            query.$or = [
                { email: { $regex: search, $options: "i"} },
                { profession: { $regex: search, $options: "i"} }
            ];
        }

        const totalCount = await User.countDocuments(query)
        const totalPages = Math.ceil(totalCount / limit);


        const instructors = await User.find(query)
        .skip((page -1) * limit)
        .limit(limit)
        .lean();

        return { instructors, totalPages, totalCount}
        
    }catch(error){
        throw new Error((error as Error)?.message);
    }
}