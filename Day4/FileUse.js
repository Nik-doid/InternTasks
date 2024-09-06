const fs = require('fs');

// Write to a file
fs.writeFile('./abc.txt', 'Hello, world!', (err) => {
    if (err) {
        console.error("Error writing to file:", err.message);
        return;
    }
    console.log('File written successfully!');

    // Read the file
    fs.readFile('./abc.txt', 'utf-8', (err, data) => {
        if (err) {
            console.error("Error reading file:", err.message);
            return;
        }
        console.log('File content:', data);
        
        // Copy the file
        fs.copyFile('./abc.txt', './bcd.txt', (err) => {
            if (err) {
                console.error("Error copying file:", err.message);
                return;
            }
            console.log('File copied successfully!');
        });
    });
});
