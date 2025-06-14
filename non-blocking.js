const fs = require('fs');

// This is a non-blocking call (asynchronous)
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log("File data:", data);
});

console.log("This prints BEFORE the file is read");