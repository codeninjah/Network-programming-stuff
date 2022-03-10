const net = require('net');

const SOCKETServer = net.createServer((socket) => {
    socket.write('Server is listening!\r\n');

    socket.on('data', function(data) {
        console.log('CLIENT:', data.toString());
    })

    socket.pipe(socket);
});


SOCKETServer.listen(8000)