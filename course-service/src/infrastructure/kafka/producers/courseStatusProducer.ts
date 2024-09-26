import { producer } from "..";  
import { CourseEntity } from "../../../domain/entities";

export default async(data: CourseEntity , topic?: string) => {
    try{
        const targetTopic = topic || "default service";
        await producer.connect();

        const messages:any = {
            topic:targetTopic,
            messages: [
                {
                    key: "courseStatusUpdated",
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