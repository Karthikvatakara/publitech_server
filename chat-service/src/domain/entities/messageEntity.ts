import { ObjectId } from "mongoose";

enum contents {
    text = "text",
    image = "image",
    audio = "audio",
    video = "video",
    file = "file"
}

export interface messageEntity {
    _id?:  ObjectId,
    sender :  ObjectId,
    content? : string,
    chatId :  ObjectId,
    contentType? : contents,
    recieverSeen : boolean,
    createdAt?: Date | string;
    updatedAt?: Date | string;
}