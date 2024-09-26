import { subscriptionPaymentEntity } from "../../../domain/entities/subscriptionPaymentEntity";
// import { ChatUpdateData } from "../../../domain/entities/chatUpdateEntity";
import { producer } from "..";


export default async( data: any, topic: string) => {
    try{
        const targetTopic = topic || "default-service";
        await producer.connect();

        const messages: any = {
            topic: targetTopic,
            messages : [
                {
                    key: "updateChatSubscription",
                    value: JSON.stringify(data)
                }
            ]
        }
        await producer.send(messages);
    }catch(error){
        throw new Error((error as Error)?.message);
    }finally{
        producer.disconnect();
    }
}