import { chatEntity } from "../../../../domain/entities";
import { chat } from "../models";

export const getChatByUserId = async( userId: string ): Promise< chatEntity[] | null> => {
    try{
        const getAllChats = await chat.find({ users: userId})
        .populate("users")
        .populate("latestMessage")
        .populate("groupAdmin", "username profile.avatar")
        .sort( { updatedAt: -1 })

        if( !getAllChats ) {
            throw new Error("chats not retreived successfully");
        }

        return getAllChats;
    }catch(error){
        throw new Error((error as Error)?.message);
    }
}