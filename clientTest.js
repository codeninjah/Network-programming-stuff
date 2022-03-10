const net = require('net');
const client = new net.Socket();
client.connect(8000, process.env.LOCAL_IP, () => {
    setTimeout(sender, 1500, null);
});
client.on('data', (data) => {
    console.log('SERVER: ' + data);
});
let sender = () => {
    client.write('Hello Server\r\n');
    setTimeout(sender, 1500, null);
};