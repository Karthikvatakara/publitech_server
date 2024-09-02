import { resultEntity } from "../../../../domain/entities/resultEntity";
import { Result } from "../models/result";

export const getResultsByUserId = async( userId: string ):Promise<resultEntity[] | null> => {
    try{
        const results = await Result.find({userRef:userId})
                                    .populate({
                                        path: "assessmentRef",
                                        select: "title"
                                    })
                                   
        return results;
    }catch(error){
        throw new Error((error as Error)?.message)
    }
}