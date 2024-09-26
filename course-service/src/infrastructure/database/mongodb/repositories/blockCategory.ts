import { dependencies } from "../../../../_boot/dependencies";
import { CategoryEntity } from "../../../../domain/entities";
import { category } from "../models";
import { ObjectId } from "mongodb";

export const blockCategory = async(id:string,action:"block" | "unblock") :Promise<CategoryEntity | null>=> {
   
    
    try{
        const isBlocked = action === "block"
        const categoryId = new ObjectId(id)

        const updated = await category.findOneAndUpdate(
                        { _id:categoryId },
                        { $set: { isBlocked:isBlocked }},
                        { new: true}
        );

        return updated as CategoryEntity

       
    
    }catch(error:any){
        throw new Error(error?.message || "error ocuured in block category repository")
    }
}