import { Kafka,Producer,Consumer } from 'kafkajs';

// devolopement
// const kafka = new Kafka({
//     clientId: 'course-service',
//     brokers: ['localhost:29092']
// })

// production
const kafka = new Kafka({
    clientId: "course-service",
    brokers: ["kafka:9092"]  
});
export const producer:Producer = kafka.producer();
export const consumer:Consumer = kafka.consumer({groupId:'course-service-kafka-group'});