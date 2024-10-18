import { populate } from "dotenv";
import { chatEntity } from "../../../../domain/entities";
import { chat } from "../models";

export const createChat = async( data: chatEntity ): Promise< chatEntity | null> => {
    try{
        const newChat = await chat.create(data)
        // console.log("🚀 ~ createChat ~ newChat:", newffChat)

        const populatedChat = await chat.findById(newChat._id)
        .populate("users","-password")
        .populate("groupAdmin","-password")

        if(!populatedChat){
            throw new Error("failed to create chat")
        }
        return populatedChat;
    }catch(error){
        throw new Error((error as Error)?.message);
    }
}