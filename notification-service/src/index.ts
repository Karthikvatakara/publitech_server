import server from "./presentation/index"
import { runConsumer,stopConsumer } from "./_boot/consumer";

(async() => {
    try {
        server;
        await runConsumer();
    }catch(error:any) {
        console.error(error?.message || "error occured");
        process.exit(1);
    }
})();

