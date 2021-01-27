const express = require('express');
const fs = require('fs');
const app = express();
const port = 80;

app.get('/', (req, res) => {
    res.setHeader("content-type", "some/type");
    fs.createReadStream("./index.html").pipe(res);
});

app.listen(port, () => {
    console.log(`Example app listening at http: //localhost:${port}`)
});