const fs = require('fs');

// Write to a file
fs.writeFile('example.txt', 'Hello, world!', (err) => {
    if (err) {
        console.error("Error writing to file:", err.message);
        return;
    }
    console.log('File written successfully!');

    // Read the file
    fs.readFile('example.txt', 'utf-8', (err, data) => {
        if (err) {
            console.error("Error reading file:", err.message);
            return;
        }
        console.log('File content:', data);
    });
});
 
const fsExtra = require('fs-extra');

// Copy a file
fsExtra.copy('source.txt', 'destination.txt')
    .then(() => console.log('File copied successfully!'))
    .catch(err => console.error("Error copying file:", err.message));
