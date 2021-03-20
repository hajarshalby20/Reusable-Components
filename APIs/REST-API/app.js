//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));


mongoose.connect("mongodb://localhost:27017/wikiHow", {
  useNewUrlParser: true,
});

const articleSchema = {
  title: String,
  content: String,
};

const Article = mongoose.model("Articale", articleSchema);

/////////////////////////////////////////// Routes for all ////////////////////////////////////////////////////////////////

app
  .route("/articles")

  .get((req, res) => {
    Article.find((err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  })

  .post((req, res) => {
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content,
    });
    newArticle.save((err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send("Your new articale send succefully");
      }
    });
  })

  .delete((req, res) => {
    Article.deleteMany((err) => {
      if (err) {
        res.send(err);
      } else {
        res.send("All articales deleted succefully");
      }
    });
  });

//////////////////////////////// Routes for narrow data ////////////////////////////////////////////////////////////////

app
  .route("/articles/:anyWordToFindArticleTitle")

  .get((req, res) => {
    Article.findOne(
      { title: req.params.anyWordToFindArticleTitle },
      (err, result) => {
        if (err) {
          res.send("No Article matched with this title");
        } else {
          res.send(result);
        }
      }
    );
  })

  .put((req, res) => {
    Article.update(
      { title: req.params.anyWordToFindArticleTitle },
      {
        title: req.body.title,
        content: req.body.content,
      },
      { overwrite: true },
      (err) => {
        if (err) {
          res.send("No Article matched with this title");
        } else {
          res.send("updated succusefully");
        }
      }
    );
  })

  .delete((req, res) => {
    Article.deleteOne(
      { title: req.params.anyWordToFindArticleTitle },
      (err) => {
        if (err) {
          res.send("No Article matched with this title");
        } else {
          res.send("deleted succusefully");
        }
      }
    );
  })

  .patch((req, res) => {
    Article.update(
      { title: req.params.anyWordToFindArticleTitle },
      { $set: req.body },
      (err) => {
        if (err) {
          res.send("No Article matched with this title");
        } else {
          res.send("selected field is updatedd succusefully");
        }
      }
    );
  });

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
