import { chatEntity } from "../../../domain/entities";
import { updateChatSubscription } from "../../database/mongoDb/repositories/updateChatSubscription";

export default async( data: chatEntity ) => {
    try{
        console.log("data reached in the consumer part in the updatesubscription");
        console.log("/>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<????????????????????<<<<<<<<<<>>>>>>>>>>>");
        
        await updateChatSubscription(data);
    }catch(error){
        throw new Error((error as Error)?.message);
    }
}