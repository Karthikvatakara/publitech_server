import { messageEntity } from "../../../../domain/entities";
import { message } from "../models";
import { Types } from "mongoose";

export const getMessagesByChatId = async( chatId : string ) : Promise < messageEntity[] | null > => {
    try{
        const messages = await message.find({ chatId: new Types.ObjectId(chatId) })
        .populate("sender")
        .sort({ createdAt: 1 });

        return messages;
    }catch(error){
        throw new Error((error as Error) ?.message);
    } 
}