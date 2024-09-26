import { UserEntity } from "../../../../domain/entities/userEntity";
import { User } from "../models/User";

export const findAppliedInstructor =  async(page:number = 1,limit:number = 5,status:string = "all",search:string = ""):Promise< {instructors: UserEntity[], totalCount: number, totalPages: number,currentPage: number} > => {
    try{
        const skip = (page -1) * limit;

        let query:any = { stage: { $ne: "not-requested" } };

        if(status !== "all") {
            query.stage = status;
        }

        if(search) {
            query.$or = [
                { email: { $regex: search, $options: 'i'}},
                { proffession: { $regex: search, $options: 'i'}}    
            ]
        }

        const totalCount = await User.countDocuments(query);

        const instructors = await User.find(query).skip(skip).limit(limit).select('email profession profileDescription stage')
       

        return {
            instructors,
            totalCount,
            totalPages: Math.ceil(totalCount / limit),
            currentPage: page
        }
    }catch(error){
        console.error(error,"error ocuured in the applied instructor repository");
        throw new Error((error as Error)?.message);
    }
}