import { producer } from "..";  
import { UserEntity } from "../../../domain/entities/userEntity";

export default async(data:UserEntity,topic?:string) => {
    try{
        const targetTopic = topic || "default service";
        await producer.connect();

        const messages:any = {
            topic:targetTopic,
            messages: [
                {
                    key: "instructorApplied",
                    value: JSON.stringify(data)
                }
            ]
        }
        await producer.send(messages);
    }catch(error:any){
        console.log("kafka producer error",error?.message)
    }finally{
        await producer.disconnect();
    }
}