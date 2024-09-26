import { ObjectId } from "mongoose";
import { producer } from "..";
import { EnrollmentEntity } from "../../../domain/entities/enrollmentEntity";


export default async( data: any, topic: string ) => {
    try{
        const targetTopic = topic || "default service"
        await producer.connect();

        const messages : any = {
            topic : targetTopic,
            messages : [
                {
                    key: "createChat",
                    value: JSON.stringify(data)
                }
            ]
        }
        await producer.send(messages);
    }catch(error) {
        throw new Error((error as Error)?.message)
    }finally {
        await producer.disconnect();
    }

}