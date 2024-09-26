import { consumer } from "../infrastructure/kafka";
import { createSubscriber,INotificationSubscriber } from "../infrastructure/kafka/subscriber";  

export const runConsumer = async() => {
    try{
        await consumer.connect();

        await consumer.subscribe({
            topic: "payment-service-topic",
            fromBeginning:true
        })

        const subscriber = createSubscriber();

        await consumer.run({
            eachMessage:async({message}) => {
                const { key,value } = message;

                if(!key) {
                    console.error("kafka message key is missing");
                    throw new Error(" kafka key is missing")
                }
                if(!value) {
                    console.error("kafka message value is missing")
                    throw new Error(" kafka value is missing")
                }

                const subscriberMethod = String(key) as keyof(INotificationSubscriber)
                const subscriberData = JSON.parse(String(value))

                try{
                    await   subscriber[subscriberMethod](subscriberData)
                }catch(error:any){
                    console.error(`error with the message key ${key}`,error?.message)
                    throw new Error("error in kafka consumer")
                }

            }
        })
    }catch(error:any) {
        console.error("kafka consumer error in  the auth-service",error?.message)
        throw new Error(error?.message);
    }   
}