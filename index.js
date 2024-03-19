const path = require("path");
const express = require('express');
const fs = require('fs');

var app = express()
const port = 3000;

const views = path.join(__dirname, 'views');


app.get('/', function(req, res){
    res.sendFile(views + "/index.html");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});