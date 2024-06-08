import { Client }  from "../redis/redisClient";

export const storeOtp = async(email: string, otp: string):Promise<void> => {
    try{
        const key = `otp:${email}`;
        const ttl = 300;

        await Client.set(key,otp,'EX',ttl)
        const value = await Client.get(key)
        console.log(`otp  ${value}stored for email ${email} with expiry of ${ttl} seconds`);
    }catch(error:any) {
        console.error('error storing otp in redis',error?.message);
        throw error;
    }
}