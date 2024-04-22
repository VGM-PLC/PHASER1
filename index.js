const path = require("path");
const express = require('express');
const fs = require('fs');

var app = express()
const port = 3000;

const views = path.join(__dirname, 'views');

const scenes = path.join(__dirname, 'views', 'scenes');

app.get('/', function(req, res){
    res.sendFile(views + "/head.html");
});

app.get('/scenes', function(req, res){
    res.sendFile(views + "/head.html");
});

app.get('/scenes/scene1.html', function(req, res){
    res.sendFile(scenes + "/scene1.html");
});


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});