function WebSocketStart()
{
    if ("WebSocket" in window)
    {
        // Let us open a web socket
        const host = window.location.hostname;
        let ws = new WebSocket('ws://'+host+':12345/');

        ws.onopen = function()
        {
            // Web Socket is connected, send data using send()
            ws.send("Message to send");
            console.log("Message is sent...");
        };

        ws.onmessage = function (evt)
        {
            const recieved_msg = evt.data;
            console.log("recieved message " + recieved_msg);
        };

        ws.onclose = function()
        {
            // websocket is closed.
            console.log("Connection is closed...");
        };
    }

    else
    {
        // The browser doesn't support WebSocket
        alert("WebSocket NOT supported by your Browser!");
    }
}

WebSocketStart();