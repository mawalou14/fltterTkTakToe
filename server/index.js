

const express = require('express');
const http = require('http');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT|| 4000;

var server = http.createServer(app);

const Room = require('./models/room');

var io = require("socket.io")(server);

// Middleware
app.use(express.json());

const DB = "mongodb+srv://mawalou14:6292568Lufab@cluster0.eyhqffa.mongodb.net/?retryWrites=true&w=majority";

io.on("connection", (socket) => {
    console.log("Connected!");
    socket.on("createRoom", async ({ nickname }) => {
     console.log(nickname);
     try {

    //  Room is created
    let room = new Room();
    let player = {
        socketID: socket.id,
        nickname: nickname,
        playerType: 'X',
    };
    room.players.push(player);
    room.turn = player;
    room = await room.save();
    const roomId = room._id.toString();
    socket.join(roomId);
    // tell client that room has been created
    io.to(roomId).emit('createRoomSuccess', room);
     } catch (e) {
        console.log(e);
     }
    // Player is stored in the DB
    });
});

mongoose.connect(DB).then(() => {
    console.log("Connection to db Successfull");
})
.catch((e) => {
    console.log(e);
});

server.listen(port, '0.0.0.0', () => {
    console.log('Server started and running on port ' + port);
})
