import { model,Schema, Types } from "mongoose";
import { messageEntity } from "../../../../domain/entities/messageEntity";

const messageSchema = new Schema({
    sender: {
        type: Types.ObjectId,
        ref: "users",
        required: true
    },
    content: {
        type: String, 
        required: true
    },
    chatId: {
        type: Types.ObjectId,    
        ref: "chats",
        required: true
    },
    contentType: {
        type: String,
        enum: ['text', 'image', 'audio', 'video', 'file'],
        default: 'text'
    },
    recieverSeen: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
})

export const message = model<messageEntity>("messages",messageSchema)