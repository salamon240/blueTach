

// second file

const init = () => {
    app.get('/', (req, res) => {
        fs.writeFile('newFileFromGet.txt', 'Add new content', 'utf8', (err) => {
            if (err) {
                console.error("Error from newFile", err)
            } else {
                console.log("Asynchronous Write Successful!")
            }
        });
        res.writeHead(201, { 'Content-Type': 'text/plain' });
        res.end('Hello index page');
    });
    
    app.get('/about', (req, res) => {
        res.status(200).send('This is the about page.');
    });
    
    app.post('/submit', express.json(), (req, res) => {
        const { name, age } = req.body;
        res.status(200).json({ message: `Hello, ${name}! You are ${age} years old.` });
    });

}

modules.export = { init };