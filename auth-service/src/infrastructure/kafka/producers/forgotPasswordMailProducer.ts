import { Kafka } from "kafkajs";
import { producer } from "..";

export default async(data: {email:string,token:string}) => {
        try{
            await producer.connect();

            const messages:any = {
                topic: "notification-service-topic",
                messages: [
                    {
                        key: "requestForgotPassword",
                        value: JSON.stringify(data)
                    }
                ]
            }
            await producer.send(messages);
        }catch(error:any){
            console.error("kafkaf prouce error")
            throw new Error(error?.message);
        }finally{
            producer.disconnect();
        }
}