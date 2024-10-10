import { UserEntity } from "../../../domain/entities/userEntity";
import { producer } from "..";

export default async(data:UserEntity,topic?:string) => {
    try{

        const targetTopic = topic || "default service";
        await producer.connect();

        const messages:any = {
            topic: targetTopic,
            messages: [
                {
                    key: "instructorApproval",
                    value: JSON.stringify(data)
                }
            ]
        }

        await producer.send(messages);
    }catch(error){
        console.error("kafka produce error", (error as Error)?.message)
    }finally {
        await producer.disconnect();
    }
}