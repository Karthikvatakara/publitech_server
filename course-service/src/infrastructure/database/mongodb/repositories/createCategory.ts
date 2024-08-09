import { CategoryEntity } from "../../../../domain/entities";
import { category } from "../models";

export const createCategory = async(data:CategoryEntity): Promise<CategoryEntity | null> => {
    try{

        const existingCategory = await category.findOne({title:data.title})

        if(existingCategory){
            throw new Error(`${data.title} is already exist`)
        }

        const newCategory = await category.create(data);

        return newCategory 
    }catch(error:any){
        throw new Error(error?.message || "error occured in createcategory repository")
    }
}