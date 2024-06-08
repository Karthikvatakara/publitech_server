import { consumer } from "../infrastructure/kafka";
import { createSubscriber,INotificationSubscriber } from "../infrastructure/kafka/subscriber";  

export const runConsumer = async() => {
    try{
        await consumer.connect();

        await consumer.subscribe({
            topic: "auth-service-topic",
            fromBeginning:true
        })

        const subscriber = createSubscriber();

        await consumer.run({
            eachMessage:async({message}) => {
                const { key,value } = message;

                if(!key) {
                    console.error("kafka message key is missing");
                    return;
                }
                if(!value) {
                    console.error("kafka message value is missing")
                }

                const subscriberMethod = String(key) as keyof(INotificationSubscriber)
                const subscriberData = JSON.parse(String(value))

                try{
                    await   subscriber[subscriberMethod](subscriberData.email,subscriberData.otp)
                }catch(error:any){
                    console.error(`error with the message key ${key}`,error?.message)
                }

            }
        })
    }catch(error:any) {
        console.error("kafka consumer error in  the auth-service",error?.message)
    }   
}