import server from "./presentation/server";
import dbConnection from "./_boot/config";
import { runConsumer } from "./_boot/consumer";

(async() => {
    try{
        server;
        await dbConnection();        
        await runConsumer();
    }catch(error:any){
        console.error(error?.message || "error occured")
        process.exit(1)
    }
})();
