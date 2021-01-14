//  ROUTES
// app.get("/articles", (req, res) => {
//   Article.find((err, result) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(result);
//     }
//   });
// });

// post data to db
// app.post("/articles", (req, res) => {
//   const newArticle = new Article({
//     title: req.body.title,
//     content: req.body.content,
//   });
//   newArticle.save((err, result) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send("Your new articale send succefully");
//     }
//   });
// });

// delete all data from db

// app.delete("/articles",(req,res)=>{
//     Article.deleteMany((err)=>{
//         if (err) {
//             res.send(err);
//           } else {
//             res.send("All articales deleted succefully");
//           }
//     });
// });