const net = require("net");
const socket = net.Socket();
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


socket.on("data", data => {
    console.log("server responded: ", data.toString());
    socket.end();
    
})

socket.connect(5000, "127.0.0.1", () => {
    console.log("Client connected to server!");
    rl.question('What is your word? ', (answer) => {
        socket.write(answer);
        rl.close();
    });


});