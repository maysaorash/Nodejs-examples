var express = require('express');
var app = express();

// console.log("Hello World")

// app.get("/", (req,res)=>{
// 	res.send("Hello Express")
// })

// app.get("/", (request, response) => response.sendFile(__dirname + "/views/index.html"));


// app.get("/json", (request, response) => response.json({"message": "Hello json"}));


// app.get("/json",(req,res)=>{process.env.MESSAGE_STYLE=="uppercase"?res.json({"message": "Hello json".toUpperCase()}) : res.json({"message": "Hello json"})});




app.use((req, res, next)=> {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});








 module.exports = app;
