const fs = require('fs');

console.log("myFs");

// Asynchronous Read
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading the file:", err);
    } else {
        console.log("Asynchronous Read Result:");
        console.log(data);
    }
});

try {
    const content = fs.readFileSync('example.txt', 'utf8');
    console.log("Synchronous Read Result:");
    console.log(content);
} catch (err) {
    console.error("Error reading the file synchronously:", err);
} 

fs.write('newFile.txt', 'Add new content', 'utf8', (err) => {
    if(err){
        console.error("Error from newFile", err)
    } else {
        console.log("Asynchronous Write Successful!")
    }
});