import { model,Schema, Types } from "mongoose";
import { chatEntity } from "../../../../domain/entities/chatEntity";

const chatSchema = new Schema({
    
    isGroupChat : {
        type: Boolean,
        default: false
    },
    users : [{
        type: Types.ObjectId,
        ref: "users",
        required : true
    }],
    latestMessage : {
        type: Types.ObjectId,
        ref: "messages"
    },
    groupName : {
        type: String
    },
    groupAdmin : {
        type: Types.ObjectId,
        ref: "users"
    },
    subscriptionType: {
        type: String,
        enum: ["none","basic","standard","premium"],
        default: "none"
    }
},{
    timestamps : true
})

export const chat = model<chatEntity> ("chats",chatSchema)