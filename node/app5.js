const express = require ('express');
const path = require ('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.get ("/pageone", (req,res) => {
    res.sendFile (path.join(__dirname, "web" ,"pageone.html"))
})
app.get("/pagetwo", (req,res) => {
    res.sendFile (path.join(__dirname, "web" ,"pagetwo.html"))
})
app.get("/pagethree", (req,res) => {
    res.sendFile (path.join(__dirname, "web" ,"error.html"))
})

console.log("listening to port 3000")