const net = require('net')

const server = net.createServer(function (socket){
    console.log("Client connecter")

    socket.setEncoding('utf8')

    socket.on('data', function(data){
        console.log(data)
        //socket.write(data)
    })

    socket.on('error', function(error){
        console.log(error)
    })

    socket.pipe(socket)
})

server.listen(8000)