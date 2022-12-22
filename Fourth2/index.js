const express = require('express');

const app = express();

const PORT = 3001;

app.get('/test', (req, res) => {
    res.sendFile(__dirname + `/index.html`)
})

app.listen(PORT, () => console.log(`server listening at http://localhost:${PORT}/test`))