const express = require('express');
const cors=require('cors');
const app=express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3008;

app.use(cors());
app.use(urlencodedParser);
app.use(jsonParser);


app.get('/notas', (req: any, res: any) =>{
    let file = fs.readFileSync('notas.json');
    let notas = JSON.parse(file);
    res.send(notas);
})


app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});