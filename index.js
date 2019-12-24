const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(express.json());

// Morgan
app.use(morgan("dev"));

// Router
app.use(require("./routes"));

// Handling Error
app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Start the Server
app.listen(3000, () => console.log(`Server Running`));
