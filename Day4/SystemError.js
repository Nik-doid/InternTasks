const fs = require('fs');

fs.readFile('./abc.txt', (err, data) => {
    if (err) {
        console.error("System Error:", err.message);
        return;
    }
    console.log(data.toString());
});
