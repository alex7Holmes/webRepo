

const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
var cors = require('cors');

app.use(cors());

app.use("/public", express.static("./public/"));

var HTTP_PORT = process.env.PORT || 3000;

function onHttpStart() {
    console.log("Express server listening on: " + HTTP_PORT);
}

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "/index.html"))
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/about.html"))
})

app.use(function(req, res, next) {
    res.status(404).send("404: Page Not Found");
});

app.listen(HTTP_PORT, onHttpStart);