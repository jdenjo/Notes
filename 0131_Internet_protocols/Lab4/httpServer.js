const http = require("http");
const url = require("url");

const server = http.createServer((request, response) => {
  const parsedUrl = url.parse(request.url, true);
  const query = parsedUrl.query;
  const score = parseFloat(query.score);
  let grade = "";

  if (score > 80){
      grade = "A";
  }
  else if (score > 70){
      grade = "B";
  }
  else if (score > 60){
      grade = "C";
  }
  else if (score >50){
      grade = "D";
  }
  else{
      grade = "F";
  }
  
  response.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>HTTP Lab 1</title>
      </head>
      <body>
        <h1>Your grade is ${grade} based on a score of ${score}</h1>
      </body>
    </html>
  `);
  // Once response is built, we tell the server that is complete and ready
  // to be sent by calling the .end()
  response.end();
});

const PORT = 8080;
const ADDRESS = "127.0.0.1";

server.listen(PORT, ADDRESS, () => {
  console.log(`Server listening on ${ADDRESS}:${PORT}`);
});

//start server and then initiate by going to chrome and http://127.0.0.1:8080/?temp=100




