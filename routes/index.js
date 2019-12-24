const express = require("express"),
  router = express.Router();

//   Get Router from controllers
router.use("/todos", require("./todos"));

// export Router
module.exports = router;
