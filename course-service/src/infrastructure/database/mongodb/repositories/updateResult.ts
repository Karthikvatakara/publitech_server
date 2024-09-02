import ErrorResponse from "../../../../_lib/common/error/ErrorResponse";
import { resultEntity } from "../../../../domain/entities/resultEntity";
import { Result } from "../models/result";

export const updateResult = async( resultId: string , data: resultEntity ) => {
     try{
        const updatedResut = await Result.findByIdAndUpdate(resultId, data, {new: true});

        if( !updatedResut ) {
            throw new Error("result not updated")
        }
        return updatedResut;
        
     }catch(error){
        throw new Error((error as Error)?.message);
     }
}