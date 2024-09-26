import { ObjectId } from "mongoose"
import { chatEntity } from "../../../../domain/entities"
import { chat } from "../models"

export interface createChatEntity {
    userId : string | ObjectId  ,
    instructorRef: string | ObjectId
}

export const coursePurchasedChatCreation = async(data: createChatEntity) : Promise< chatEntity | null> => {
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
    }catch(error) {
        throw new Error((error as Error)?.message)
    }
    
}