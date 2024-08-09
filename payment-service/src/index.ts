import server from './presentation/server';
import dbconnection from './_boot/config';

(async() => {
    try{
        server;
        dbconnection();
    }catch(error){
        console.error((error as Error)?.message);
        process.exit(1);
    }
})();