const net = require('net')

const socket = net.connect(
    {port: 8000, host: '192.168.56.1'},
    function(){
        console.log("Connected")
        socket.write("Alex")
        socket.end()
    }
)