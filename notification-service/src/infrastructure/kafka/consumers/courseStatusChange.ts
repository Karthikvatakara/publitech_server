import { courseStatusUpdation } from "../../services/courseStatusUpdation";

export default async( data: any ) => {
    try{
        console.log("aaaaaa",data);
        await courseStatusUpdation(data)
    }catch(error){
        throw new Error((error as Error)?.message);
    }
}