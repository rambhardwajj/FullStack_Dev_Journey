const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', (socket) => {		// every time there is a connection the you get a socket | server gets back the socket for this user
	socket.on('chat message', (msg) => {// and whevever this socket sends me a message
	  io.emit('chat message', msg);		// I emit it to everyone else
	});
  });


server.listen(3000, () => {
  console.log('listening on *:3000');
});