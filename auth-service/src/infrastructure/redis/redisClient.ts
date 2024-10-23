// import { Redis } from "ioredis";

// export const Client = new Redis();

// Client.on("connect",() => {
//     console.log("connected to redis");
    
// })



// production setup
// import { Redis, RedisOptions } from "ioredis";

// // In production, use the Redis service name and port
// // const redisHost = process.env.REDIS_HOST || "redis-stack";
// // const redisPort = parseInt(process.env.REDIS_PORT || "6379");
// const redisPassword = process.env.REDIS_PASSWORD || "";

// const redisConfig: RedisOptions = {
//   host: "redis-stack",
//   port: 6379,
//   password: redisPassword
// };

// export const Client = new Redis(redisConfig);

// Client.on("connect", () => {
//   console.log("Connected to Redis");
// });



import { Redis } from "ioredis";

// Set the Redis URL provided by Render.
const redisURL = "rediss://red-crvq453tq21c738oo8a0:uO3jzb04GmfdJljxDNyOIxdfshfNNAn0@oregon-redis.render.com:6379";


// Create a Redis client using the URL.
export const Client = new Redis(redisURL);

// Event listener to confirm connection.
Client.on("connect", () => {
  console.log("Connected to Redis");
});

// Event listener to handle errors.
Client.on("error", (err) => {
  console.error("Redis connection error:", err);
});