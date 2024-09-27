"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const activeLiveStreams = new Map(); // Global declaration
const socket = require('socket.io');
console.log(process.env.CLIENT_URL, "env");
const connectSocketIo = (server) => {
    const io = socket(server, {
        cors: {
            origin: [process.env.CLIENT_URL],
            credentials: true,
        },
    });
    const userSocketMap = {};
    io.on("connection", (socket) => {
        console.log("socket connected");
        const userId = socket.handshake.query.userId;
        if (userId !== "undefined") {
            userSocketMap[userId] = socket.id;
        }
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
        console.log(userSocketMap, "??????????????????");
        const joinChat = (room) => {
            socket.join(room);
        };
        const newMessage = (message) => {
            console.log("🚀 ~ newMessage ~ message:", message);
            const chat = message.chatId;
            if (!chat._id) {
                console.log("Chat ID is missing in the message");
                return;
            }
            io.to(chat._id).emit("message received", message);
        };
        socket.on("join chat", joinChat);
        socket.on("new message", newMessage);
        socket.on("start-call", ({ roomId, localPeerId }) => {
            console.log(roomId, "roomId");
            console.log(localPeerId, "videoCall");
            socket.to(roomId).emit("incoming-call", localPeerId);
            console.log("🚀 ~ socket.on ~ roomId:", roomId);
        });
        socket.on("end-call", (roomId) => {
            socket.to(roomId).emit("end-call");
        });
        socket.on('start-live-stream', ({ streamId, instructorId }) => {
            console.log(`Starting live stream: ${streamId} by instructor: ${instructorId}`);
            const timestamp = Date.now();
            activeLiveStreams.set(streamId, { streamId, instructorId, timestamp });
            io.emit('new-live-stream', { streamId, instructorId, timestamp });
        });
        socket.on("get-current-live-streams", () => {
            const currentStreams = Array.from(activeLiveStreams.values());
            console.log("Sending current live streams:", currentStreams);
            socket.emit('current-live-streams', currentStreams);
        });
        socket.on('end-live-stream', ({ streamId }) => {
            console.log("🚀 ~ socket.on ~ streamId:eeeeeeeeeeeeeeeeeeeend", streamId);
            activeLiveStreams.delete(streamId);
            io.emit('live-stream-ended', { streamId });
        });
        socket.on('join-live-stream', ({ streamId, studentId }) => {
            console.log(`Student ${studentId} joining stream ${streamId}`);
            socket.join(streamId);
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
        socket.on("disconnect", () => {
            console.log("Socket disconnected");
            if (userId !== "undefined") {
                delete userSocketMap[userId];
                io.emit("getOnlineUsers", Object.keys(userSocketMap));
            }
            io.emit('student-left', { socketId: socket.id });
        });
    });
};
exports.default = connectSocketIo;
