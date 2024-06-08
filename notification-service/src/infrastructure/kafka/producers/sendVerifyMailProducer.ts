import { producer } from "..";

export default async(data:{email:string,otp:string}) => {
    try{
        await producer.connect();

        const messages = {
            topic: "auth-service-topic",
            messages:[
                {
                    key:"sendVerificationMail",
                    value: JSON.stringify(data)
                }
            ]
        }

        await producer.send(messages)
    }catch(error:any){
        console.error("kafka sendverifyMail producer error",error?.message)
    }finally{
        await producer.disconnect();
    }
}