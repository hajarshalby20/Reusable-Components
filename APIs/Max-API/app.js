const express = require("express");
const feedRouter = require("./routes/feeds");
const bodyParser = require('body-parser')
const app = express();


app.use(bodyParser.json());

app.use("/feed", feedRouter);


app.listen(4000, (req, res) => {
  console.log("server is runinng on 4000");
});
