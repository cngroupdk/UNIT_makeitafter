const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 12345 });

// Broadcast to all.
wss.broadcast = function broadcast(data) {
    wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
            client.send(data);
        }
    });
};

wss.on('connection', function connection(conn) {
    console.log("new client")
    conn.on('message', function incoming(data) {
        console.log('recieved ' + data);
        let answer = data.split('').reverse().join('');
        conn.send(answer);
    });

    conn.on('close', function () {
        console.log('connection closed');
    })
});