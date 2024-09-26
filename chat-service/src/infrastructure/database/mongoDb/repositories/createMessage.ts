import { messageEntity } from "../../../../domain/entities";
import { chat, message } from "../models";

export const createMessage = async ( data: messageEntity ): Promise< messageEntity | null > => {
    try{
        const { chatId } = data;
       const newMessage = await message.create(data);
    
        const populatedMessage = await message.findById(newMessage._id)
            .populate('sender','username profile.avatar')
            .populate('chatId');

        await chat.findByIdAndUpdate(chatId,{ latestMessage: newMessage._id})

        return populatedMessage;

    }catch(error){
        throw new Error((error as Error)?.message);
    }
}