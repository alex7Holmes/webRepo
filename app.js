const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();

app.use("/public", express.static("./public/"));

var HTTP_PORT = process.env.PORT || 3000;

function onHttpStart() {
    console.log("Express server listening on: " + HTTP_PORT);
}

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"))
});

app.get("/comics", (req, res) => {
    res.redirect('/comics');
})

app.get("/comics/:id", (req, res) => {
    const { id } = req.params;
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/about.html"))
})

app.use((req, res, next) => {
    res.status(404).send("404: Page Not Found");
});

app.listen(HTTP_PORT, onHttpStart);