const fs = require("fs");

// Here's an example of using plain fs.readFile:
fs.readFile("./dump", "utf8", (error, data) => {
  console.log(data);
});

function pReadFile(path, options) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, options, (error, data) => {
      if (error) return reject(error);
      resolve(data);
    });
  });
}
