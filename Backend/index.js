const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

app.use(cors());

app.listen(8081,()=>{console.log("Fut a szerver")});

const db = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'',
    database:'asztalitenisz'
})

app.get('/',(req,res)=>{
    res.send("Teszt adatbázis");
});