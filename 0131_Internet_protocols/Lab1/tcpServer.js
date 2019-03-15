const net = require("net");

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const server = net.createServer(socket => {
  console.log("-= OPENED =-");

  socket.on("data", data => {

    console.log("Server received:", data.toString());

    socket.write(data.toString().split("").reverse().join(""));

  });


});

const PORT = 5000;
const ADDRESS = "127.0.0.1";
server.listen(PORT, ADDRESS, () => {
  console.log(`Server is listenning at ${ADDRESS}:${PORT}`);
  // 127.0.0.1:5000
});
