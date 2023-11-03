

const express = require('express');
const http = require('http');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT|| 3000;

var server = http.createServer(app);

var io = require("socket.io")(server);

// Middleware
app.use(express.json());

const DB = "mongodb+srv://mawalou14:6292568Lufab@cluster0.eyhqffa.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB).then(() => {
    console.log("Connection Successfull");
})
.catch((e) => {
    console.log(e);
});


server.listen(port, '0.0.0.0', () => {
    console.log('Server started and running on port ' + port);
})