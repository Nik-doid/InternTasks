const fs = require('fs');

function readFile() {
    debugger;  // Place breakpoint here
    fs.readFile('abc.txt', 'utf-8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
}

readFile();
