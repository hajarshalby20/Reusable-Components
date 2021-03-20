exports.getposts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        tittle: "post",
        content: "this is dummy static post from js file",
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  const tittle = req.body.tittle;
  const content = req.body.content;
  const number = req.body.number;

  res.status(201).json({
    massage: "Your post created succufully",
    posts: [{ tittle: tittle, content: content,number:number }],
  });
};
