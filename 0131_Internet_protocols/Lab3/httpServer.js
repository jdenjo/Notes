const http = require("http");
const url = require("url");

const server = http.createServer((request, response) => {
  const parsedUrl = url.parse(request.url, true);
  const query = parsedUrl.query;
  const farenheit = parseFloat(query.temp);
  const celsius = (farenheit * 1.8)  + 32;
  
  response.writeHead(200, {
    "Content-Type": "text/html",
    "X-Powered-by": "Magic"
  });
  response.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>HTTP Lab 1</title>
      </head>
      <body>
        <h1>Temperature Converter</h1>
        
        <p>farenheit: ${farenheit}</p>
        <p>celsius: ${celsius}</p>
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




