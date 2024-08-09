import { ObjectId } from "mongoose"
import { coursePurchasedChatCreation } from "../../database/mongoDb/repositories/coursePurchasedChatCreation"

export interface createChatEntity {
    userId : string | ObjectId,
    instructorRef : string | ObjectId
}

export default async( data: createChatEntity ) : Promise< void > => {
    try{
        console.log(data,"recieved from payment service")
        const newChat = await coursePurchasedChatCreation(data)
    }catch(error){
        throw new Error((error as Error)?.message)
    }
}