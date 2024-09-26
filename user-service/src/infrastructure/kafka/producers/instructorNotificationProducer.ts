import { UserEntity } from "../../../domain/entities/userEntity";
import { producer } from "..";

export default async(data:{instructor:UserEntity,reason?:string},topic:string) => {
    try{
        const targetTopic = topic || 'default service'
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
        console.error(error,"error in the kafka producer")
    }finally {
        await producer.disconnect();
    }
}