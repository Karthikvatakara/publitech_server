import { IDependencies } from "../../../../application/interfaces/IDependency";
import { CategoryEntity } from "../../../../domain/entities";
import { category } from "../models";

export const getAllCategory = async():Promise<CategoryEntity[] | null> => {
    try{
        const categories = await category.find()

        return categories
    }catch(error:any){
        throw new Error(error?.message || "error occured in getallcategory controller")
    }
}