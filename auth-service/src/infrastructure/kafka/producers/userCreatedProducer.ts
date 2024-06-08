import { producer } from "..";
import { UserEntity } from "../../../domain/entities/userEntity";

export default async(data:UserEntity,topic?:string) => {
    try{

        const targetTopic = topic || "default service";
        await producer.connect();

        const messages:any = {
            topic: targetTopic,
            messages: [
                {
                    key: "userCreated",
                    value: JSON.stringify(data)
                }
            ]
        }

        await producer.send(messages);
    }catch(error:any){
        console.error("kafka produce error", error?.message)
    }finally {
        await producer.disconnect();
    }
}