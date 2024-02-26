`<link rel="stylesheet" href="style.css" />`;
const express = require("express");

const app = express();

// app.get("/student/:id", (req, res) => {
//   res.send(student.filter((el) => el.id == req.params.id));
// });

const dateware = (req, res, next) => {
  var date = new Date();
  var day = date.getDay();
  var hours = date.getHours();
  if (day > 0 && day < 6 && hours < 17 && hours > 9) {
    next();
  } else {
    res.send(
      `<img width="1400px" height="600px" src="https://e7.pngegg.com/pngimages/333/10/png-clipart-warning-sign-hazard-symbol-safety-warning-sign-miscellaneous-angle-thumbnail.png" alt=""/>`
    );
  }
};
app.use(dateware);
const PORT = process.env.PORT || 5000;
app.use(express.static("pages"));
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`server is running on port ${PORT}`)
);
