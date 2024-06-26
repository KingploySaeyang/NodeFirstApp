const express = require("express");

const users = require('./db.json');

const app = express();

const port = process.env.PORT || 3000;

app.get('/api/users', (req, res) => {
    res.json(users)
});

app.get('/api/users/:id', (req, res) => {
    res.json(users.find(user => user.id === Number(req.params.id)));
});

app.get("/", (req, res) => {
    res.send("Hello! My name is Kingploy");
});

app.get("/Kingploy", (req, res) => {
    res.send("652021042");
});

app.listen(port, () => {
    console.log("Starting node.js at port http://127.0.0.1:" + port);
    console.log("Starting node.js at port http://127.0.0.1:" + port + "/Kingploy");
    console.log("Starting node.js at port http://127.0.0.1:" + port + "/api/users");
});

