const net = require("net");
const socket = net.Socket();

const args = process.argv.slice(2);

socket.on("data", data => {
    console.log("server responded: ", data.toString());
    if (data.toString().includes("Roger")){
        socket.end();
    }
})

socket.connect(
  5000, // PORT
  "127.0.0.1", // IP ADDRESS
  () => {
    console.log("Client connected to server!");

    // To send data through the socket connection, use the method
    // .write() with one argument which is the value holding the data.
    socket.write(args[0]);
  }
);
