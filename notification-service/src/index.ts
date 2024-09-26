import server from "./presentation/index"
import { runConsumer,stopConsumer } from "./_boot/consumer";
import dbConnection from "./_boot/config";

(async() => {
    try {
        server;
        await dbConnection();
        await runConsumer();
    }catch(error:any) {
        console.error(error?.message || "error occured");
        process.exit(1);
    }
})();

