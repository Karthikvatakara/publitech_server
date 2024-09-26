import { CategoryEntity } from "../../../../domain/entities";
import { category } from "../models";

export const updateCategory = async(id:string,data:{ title: string,imageUrl: string}):Promise<CategoryEntity | null> => {
    try{
        const existingCategory = await category.findByIdAndUpdate(id,data,{ new:true });

        if(!existingCategory){
            throw new Error("category not exist");
        }
        return existingCategory;
        
    }catch(error:any){
        throw new Error(error?.message || "error occured in update")
    }
}