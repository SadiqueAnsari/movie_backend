
const express = require('express');
const app = express();
const port = 5000;
var cors = require('cors')
const fs = require('fs');



app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello Node js');

});
// console.log('hello')
app.get('/movie', (req, res) => {
    fs.readFile("movie.json", function (err, data) {
        if (err) throw err;
        const users = JSON.parse(data);
        res.send({ message: 'success', data: users })
    });

});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});