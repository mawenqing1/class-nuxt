const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/test",(req, res) => {
    res.send("Hello World!");
})

app.listen(8081, () => {
    console.log('http://127.0.0.1:8081');
})