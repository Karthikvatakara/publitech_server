import { chatEntity } from "../../../../domain/entities";
import { chat } from "../models";


export const updateChatSubscription = async( data: any ) : Promise<chatEntity | null> => {
    try{
        console.log(data,"in the chat service send by payment service");
        const { userId,chatId,subscriptionType } = data;
        
        const updatedChat = await chat.findByIdAndUpdate(chatId,{subscriptionType},{new:true});

        return updatedChat;
    }catch(error){
        throw new Error((error as Error)?.message)
    }
} 