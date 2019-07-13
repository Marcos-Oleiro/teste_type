const express = require('express');
const app = express();
const path = require('path');



app.use(express.static('public'));



app.listen(3000, () => console.log('rodando'))



app.get('/', (req, res) => {
    res.sendFile((__dirname + "/index.html"))
});


app.get('/home', (req, res) => {
    const user = {
        name: "Marcos",
        nickname: "spell"
    };
    console.log((__dirname + "/home.html"))
    res.send(user).sendFile((__dirname + "/home.html"))
});