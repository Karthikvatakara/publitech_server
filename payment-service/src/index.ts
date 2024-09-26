import server from './presentation/server';
import dbconnection from './_boot/config';
import { runConsumer } from './_boot/consumer';

(async() => {
    try{
        server;
        await dbconnection();
        await runConsumer();
    }catch(error){
        console.error((error as Error)?.message);
        process.exit(1);
    }
})();