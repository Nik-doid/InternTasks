const fs = require('fs').promises;

async function readFileAsync() {
    try {
        const data = await fs.readFile('abc.txt', 'utf-8');
        console.log(data);
    } catch (error) {
        console.error("Async Error:", error.message);
    }
}

readFileAsync();
