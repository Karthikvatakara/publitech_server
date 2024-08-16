import { UserEntity } from "../../../../domain/entities/userEntity";
import { User } from "../models/User";

export const getAllStudents = async( page: number, limit: number, status: string, search: string) : Promise<{ students: UserEntity[], totalPages: number, totalCount: number}> => {
    try{
        let query: any = { role: "student" };

        if( status === "blocked" ) {
            query.isBlocked = true
        }else if( status === "unblocked"){
            query.isBlocked = false
        }

        if(search) {
            query.$or = [
                { username: { $regex: search, $options: "i"}},
                { email: { $regex: search, $options : "i"}}
            ]
        }

        const totalCount = await User.countDocuments(query);
        const totalPages = Math.ceil(totalCount/limit);

        const students = await User.find(query)
            .skip(( page - 1 ) * limit)
            .limit(limit)
            .lean();

        return { students, totalPages , totalCount};

    }catch(error){
        throw new Error((error as Error)?.message);
    }
}