import { chatEntity } from "../../../../domain/entities/chatEntity";
import { chat } from "../models/chat";

export const saveChat = async( data: {userId: string, instructorRef: string} ) : Promise<chatEntity | null> => {
    try{
        const chatData = {
            users : [data.userId,data.instructorRef],
            isGroupChat: false
        }
        
        const isChatExist = await chat.findOne({
            users:{
                $all: [ data.userId, data.instructorRef ]
            }
        })
        if(isChatExist){

            return null;
        }

        const newChat = await chat.create(chatData);

        return newChat;
    }catch(error){
        throw new Error((error as Error)?.message);
    }
}