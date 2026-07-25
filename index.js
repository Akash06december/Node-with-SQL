const mysql = require('mysql2');
const {faker} = require('@faker-js/faker');
const express = require("express")
const app = express();
const path = require("path")

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Akash@1812',
    database: 'student'
});

let createRandomUser = ()=>{
  return[
     faker.string.uuid(),
     faker.internet.username(),
     faker.internet.email(),
     faker.internet.password(),
];
}


let users = [
    ["123b", "123_userb", "abc@gmail.comb", "abcb"],
        ["123c", "123_userc", "abcc@gmail.com", "abcc"]
    ];

// 

app.get("/",(req,res)=>{
    let q = `SELECT COUNT(*) FROM user`;
    connection.query(q,(err, result) => {
    if (err) {
        console.log(err);
        res.send("Some error in DB");
        return;
    }

    let count = result[0]["COUNT(*)"];
    res.render("home.ejs", {count})
    
    });
});

// List Users Route
app.get("/user",(req,res)=>{
    
    let q = `SELECT * FROM user`;
    connection.query(q,(err, users) => {
    if (err) {
        console.log(err);
        res.send("Some error in DB");
        return;
    }
    res.render("show.ejs",{users});
    
    });
    
});


// EDIT ROUTE
app.get("/user/:id/edit",(req,res)=>{
    let {id} = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    connection.query(q,(err, result) => {
    if (err) {
        console.log(err);
        res.send("Some error in DB");
        return;
    }
    let user = result[0];
    console.log(result);
    res.render("edit.ejs",{user});
    
    });
    
    
})


app.listen("8080",()=>{
    console.log("Server started");
});




