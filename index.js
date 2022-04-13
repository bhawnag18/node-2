const express = require("express");
const server = express();

const middleware1 = (req, res, next) => {
    console.log("I am middleware 1");
    next();
  

}
const middleware2 = (req, res, next) => {
    console.log("I am middlewaree 2");
    next();

}

server.get("/", middleware1, (request, response) => {
    response.send("hello world")
});

server.get("/bhawna",middleware2,(req, res) => {
    res.send("bhawna")
})

server.listen(3000, () => {
    console.log("server is running at port")
});