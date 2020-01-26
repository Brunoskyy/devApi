const socketio = require('socket.io');

exports.setupWebSockets = (server) => {
    io = socketio(server)

    io.on('connection', socket => {
        console.log(socket.id)
    })
}