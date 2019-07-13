const express = require('express');
const app = express();
const path = require('path');



app.use(express.static('./'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`rodando na porta ${PORT}`);
    console.log((__dirname));
})



app.get('/', (req, res) => {
    console.log((__dirname + "/index.html"));
    res.sendFile((__dirname + "/index.html"))
});


app.post('/home', (req, res) => {
    const user = {
        name: "Marcos",
        nickname: "spell"
    };
    console.log((__dirname + "/home.html"));
    res.send(user).sendFile((__dirname + "/home.html"))
});