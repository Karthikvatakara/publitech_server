import { Server as SocketIOServer, Socket } from 'socket.io';
import dotenv from 'dotenv';
import { Server } from 'http';
import { message } from '../database/mongoDb/models';

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
    // let liveStreams = {};

    io.on("connection",(socket: Socket) => {
        console.log("socket connected")
        const userId = socket.handshake.query.userId as string

        if( userId!== "undefined" ){
            userSocketMap[userId] =  socket.id
        }

        io.emit("getOnlineUsers", Object.keys(userSocketMap));
        console.log(userSocketMap,"??????????????????")
        
        
        const joinChat = ( room:string ) => {
            socket.join( room )
        }

        const newMessage = ( message:any ) => {
            console.log("🚀 ~ newMessage ~ message:", message)
            const chat = message.chatId;
            if (!chat._id) {
                console.log("Chat ID is missing in the message");
                return;
            }
            io.to(chat._id).emit("message received",message)
        }
        
        socket.on("join chat",joinChat);
        socket.on("new message",newMessage)

        // socket.on("new message",(message) => {
        //     console.log("message in connection",message,"aaaaaaaaaaa")

        //     const chat = message.chatId;
        //     console.log("🚀 ~ socket.on ~ chat:", chat._id)
        //     if (!chat._id) {
        //         console.log("Chat ID is missing in the message");
        //         return;
        //     }
        //     console.log("//////////////")
        //     io.to(chat._id).emit("message received",message)
        //     // socket.to(chat._id).emit("message received",message)
        // })

        socket.on("start-call",({ roomId, localPeerId }) => {
            console.log(roomId,"roomId")
            console.log(localPeerId,"videoCall");
            socket.to( roomId ).emit("incoming-call",localPeerId);
            console.log("🚀 ~ socket.on ~ roomId:", roomId);  
        })
        
        socket.on("end-call",(roomId) => {
            socket.to(roomId).emit("end-call")
        })
        

        socket.on('start-live-stream', ({ streamId, instructorId }) => {
            console.log("🚀 ~ socket.on ~ instructorId:11111111111111111", instructorId)
            console.log("🚀 ~ socket.on ~ streamId:222222222222222222222", streamId)
            io.emit('new-live-stream', { streamId, instructorId });
          });
        
          socket.on('end-live-stream', ({ streamId }) => {
            io.emit('live-stream-ended', { streamId });
          });
        
          socket.on('join-live-stream', ({ streamId, studentId }) => {
            console.log(`Student ${studentId} joining stream ${streamId}`);
            socket.join(streamId);
            // io.to(streamId).emit('student-joined', { studentId, socketId: socket.id });
            io.emit('student-joined', { studentId, socketId: socket.id });
          });
        
          socket.on('webrtc-offer', ({ streamId, offer, receiverSocketId }) => {
            console.log(`Sending WebRTC offer to ${receiverSocketId} for stream ${streamId}`);
            io.to(receiverSocketId).emit('webrtc-offer', { offer, senderSocketId: socket.id });
          });
        
          socket.on('webrtc-answer', ({ streamId, answer, receiverSocketId }) => {
            console.log(`Sending WebRTC answer to ${receiverSocketId} for stream ${streamId}`);
            io.to(receiverSocketId).emit('webrtc-answer', { answer, senderSocketId: socket.id });
          });
        
          socket.on('webrtc-ice-candidate', ({ streamId, candidate, receiverSocketId }) => {
            console.log(`Forwarding ICE candidate to ${receiverSocketId} for stream ${streamId}`);
            io.to(receiverSocketId).emit('webrtc-ice-candidate', { candidate, senderSocketId: socket.id });
          });
        
        // socket.on("join-live-class", (roomId: string) => {
        //     socket.join(roomId);
        //     console.log(`User joined live class room: ${roomId}`);
        // });

        // socket.on("start-live-stream", (streamData) => {
        //     console.log("🚀 ~ socket.on ~ streamData:", streamData)
        //     const { streamId, instructorId } = streamData;
        //     console.log("🚀 ~ socket.on ~ instructorId:", instructorId)
        //     console.log("🚀 ~ socket.on ~ streamId:", streamId)
           
        //     socket.to(streamId).emit("receive-offer", instructorId);
        // });

        // socket.on("answer", (answerData) => {
        //     const { roomId, answer } = answerData;
        //     socket.to(roomId).emit("receive-answer", answer);
        // });

        // socket.on("ice-candidate", (candidateData) => {
        //     const { roomId, candidate } = candidateData;
        //     socket.to(roomId).emit("receive-ice-candidate", candidate);
        // });


        socket.on("disconnect", () => {
            console.log("Socket disconnected");
            if (userId !== "undefined") {
                delete userSocketMap[userId];
                io.emit("getOnlineUsers", Object.keys(userSocketMap));
            }
            io.emit('student-left', { socketId: socket.id });
        });

       
    })
}


export default connectSocketIo;