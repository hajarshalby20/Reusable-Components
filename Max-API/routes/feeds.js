// imported files
const express = require('express');
const feedController= require("../controllers/feeds");
const route =express.Router();


route.get("/posts", feedController.getposts);

route.post("/post", feedController.createPost);


module.exports=route;