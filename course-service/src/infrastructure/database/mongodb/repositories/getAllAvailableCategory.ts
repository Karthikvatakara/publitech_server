import { CategoryEntity } from "../../../../domain/entities";
import { category } from "../models";

export const getAllAvailableCategory = async():Promise<CategoryEntity[] | null> => {
    try{
        const categories = await category.find({isBlocked:false})

        return categories
    }catch(error:any){
        throw new Error(error?.message || "error occured in getallavailable category")
    }
}