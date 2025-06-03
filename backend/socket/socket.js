import { Server } from "socket.io";

import express from 'express'
import http from 'http'

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000", // Adjust this to your frontend URL
        methods: ["GET", "POST"]
    },
});

export const getReceiverSocketId = (receiverId) =>{
    return userSocketMap[receiverId];;
}

const userSocketMap = {};

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    const userId = socket.handshake.query.userId;
    if (userId != "undefined") {
        userSocketMap[userId] = socket.id;
        console.log(`User ${userId} connected with socket ID: ${socket.id}`);
    }

    io.emit('getOnlineUsers', Object.keys(userSocketMap));

    // Handle events here
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
        delete userSocketMap[userId];
        io.emit('getOnlineUsers', Object.keys(userSocketMap));
    });


    // Example of handling a custom event
    // socket.on('message', (data) => {
    //     console.log('Message received:', data); 
    //     // Broadcast the message to all connected clients
    //     io.emit('message', data);
    // });
}
);

export { app, io, server };  