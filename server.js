const express = require('express');
const app = express();
const path = require('path');
const PORT = require('./config');


app.use(express.static('./'));


app.listen(PORT, () => {
    console.log(`rodando na porta ${PORT}`);
    console.log((__dirname));
})



app.get('/', (req, res) => {
    console.log((__dirname + "/index.html"));
    res.sendFile((__dirname + "/index.html"))
});


app.get('/home', (req, res) => {
    const user = {
        name: "Marcos",
        nickname: "spell"
    };
    console.log((__dirname + "/home.html"));
    res.send(user).sendFile((__dirname + "/home.html"))
});