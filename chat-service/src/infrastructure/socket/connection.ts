import { Server as SocketIOServer, Socket } from 'socket.io';
import dotenv from 'dotenv';
import { Server } from 'http';

const socket = require('socket.io');

console.log(process.env.CLIENT_URL,"env");

const connectSocketIo = (server: Server) => {
    const io: Socket = socket(server, {
        cors: {
            origin: [process.env.CLIENT_URL],
            credentials: true,
        },
    })

    const userSocketMap: { [ key: string ]: string } = {};
    let liveStreams = {};

    io.on("connection",(socket: Socket) => {
        console.log("socket connected")
        const userId = socket.handshake.query.userId as string

        if( userId!== "undefined" ){
            userSocketMap[userId] =  socket.id
        }

        io.emit("getOnlineUsers", Object.keys(userSocketMap));
        console.log(userSocketMap,"??????????????????")
        console.log(liveStreams,"??????????????????")
        
        socket.on("join chat",(room) => {
            socket.join(room)
            console.log(room,"room is consollingmmmm")
        })

        socket.on("new message",(message) => {
            console.log("message in connection",message,"aaaaaaaaaaa")

            const chat = message.chatId;
            console.log("🚀 ~ socket.on ~ chat:", chat._id)
            if (!chat._id) {
                console.log("Chat ID is missing in the message");
                return;
            }
            console.log("//////////////")
            io.to(chat._id).emit("message received",message)
            // socket.to(chat._id).emit("message received",message)
        })

        socket.on("start-call",({ roomId, localPeerId }) => {
            console.log(roomId,"roomId")
            console.log(localPeerId,"videoCall");
            socket.to( roomId ).emit("incoming-call",localPeerId);
            console.log("🚀 ~ socket.on ~ roomId:", roomId);  
        })
        
        socket.on("end-call",(roomId) => {
            socket.to(roomId).emit("end-call")
        })
        
        

        socket.on("disconnect", () => {
            console.log("Socket disconnected");
            if (userId !== "undefined") {
                delete userSocketMap[userId];
                io.emit("getOnlineUsers", Object.keys(userSocketMap));
            }
        });

       
    })
}


export default connectSocketIo;