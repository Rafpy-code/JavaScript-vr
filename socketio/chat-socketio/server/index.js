let express = require('express');
let app = express();

let server = require('http').Server(app);

let io = require('socket.io')(server, {
    cors: {
      origin: '*',
      methods: ["GET", "POST", "PUT", "DELETE"],
  	  }
    });
let puerto = 6677;

app.use(express.static('client'));

app.get('/hola', (req, res) => {
    res.status(200).send('Hola Mundo des Socket.io');
});

let messages = [{
    id: 1,
    text: 'Bienvenido al chat Socket.IO',
    nickname: 'Bot - Ramón'
}];

io.on('connection', (socket) => {
    console.log(`El cliente con IP ${socket.handshake.address} se ha conectado`);

    socket.emit('messages', messages);

    socket.on('add-message', (data) => {
        messages.push(data);

        io.sockets.emit('messages', messages);
    });
});

server.listen(puerto, () => console.log(`servidor corriendo en: localhost:${puerto}`));