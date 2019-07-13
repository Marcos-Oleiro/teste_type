const express = require('express');
const app = express();
const path = require('path');



app.use(express.static('./'));



app.listen(process.env.PORT || 3000, () => {
    console.log('rodando');
    console.log((__dirname));
})



app.get('/', (req, res) => {
    console.log((__dirname+ "/index.html"));
    res.sendFile((__dirname + "/index.html"))
});


app.get('/home', (req, res) => {
    const user = {
        name: "Marcos",
        nickname: "spell"
    };
    console.log((__dirname+ "/home.html"));
    res.send(user).sendFile((__dirname + "/home.html"))
});