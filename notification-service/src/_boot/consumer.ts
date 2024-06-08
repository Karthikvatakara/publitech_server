import { consumer } from "../infrastructure/kafka"; 
import { INotificationSubscriber, createSubscriber } from "../infrastructure/kafka/subscriber";

export const runConsumer = async() => {
    try{    

        await consumer.connect();

        await consumer.subscribe({
            topic:"notification-service-topic",
            fromBeginning:true
        })

        const subscriber = createSubscriber();

        await consumer.run({
            eachMessage:async({message}) => {
                const {key,value} = message;

                if(!key) {
                    console.error("kafka message key is missing");
                    return;
                }
                if(!value) {
                    console.error("kafka message value is missing")
                }

                const subscriberMethod = String(key) as keyof INotificationSubscriber;
                const subscriberData = JSON.parse(String(value));

                try{
                    await subscriber[subscriberMethod](subscriberData)
                }catch(error:any){
                    console.error(`error with message key ${key} : ${error?.message}`)
                }
            }
        })
    }catch(error:any) { 
        console.error("kafka consume error in notification-service",error?.message)
    }
}


export const stopConsumer = async() => {
    await consumer.stop();
    await consumer.disconnect();
}