const net = require("net");

const server = net.createServer(socket => {
  console.log("-= OPENED =-");

  socket.on("data", data => {

    console.log("Server received:", data.toString());

    let numbers = data.toString().split(",");
    top = Math.max(...numbers).toString();
    socket.write(top);

  });


});

const PORT = 5000;
const ADDRESS = "127.0.0.1";
server.listen(PORT, ADDRESS, () => {
  console.log(`Server is listenning at ${ADDRESS}:${PORT}`);
  // 127.0.0.1:5000
});
