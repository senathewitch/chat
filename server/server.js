const express = require('express');
const socket = require('socket.io');
const http = require('http');

const app = express();
const server = app.listen(5000);


app.use(express.static('public'));

const io = socket(server);

io.on('connection', (socket) => {
    
    socket.on('chat', data => {
        io.socket.emit('chat', data)
    })

    socket.on('typing', data => {
        socket.broadcast.emit('typing', data)
    })
})