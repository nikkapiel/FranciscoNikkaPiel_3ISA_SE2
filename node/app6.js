const express = require ("express");
const app = express();

const PORT = process.env.PORT || 3000;
let name = "Juan"
let name2 = "Pedro"

app.get("/", (req, res) =>{
    res.send(`Hello Juan ${name}`);
});

app.get("/", (req, res) =>{
    res.send(`Hello Pedro ${name2}`);
});

app.listen(PORT, function(){
    console.log("listening on port " + PORT)
});