import dbconnection from "./_boot/config";
import server from "./presentation/server";
import { runConsumer } from "./_boot/consumer";

(async() => {
    try{
        server;
        await dbconnection();
        await runConsumer();
    }catch(error){
        console.error((error as Error)?.message || "error ocuursd")
        process.exit(1); 
    }
})();