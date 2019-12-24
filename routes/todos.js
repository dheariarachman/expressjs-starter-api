const express = require("express"),
  router = express.Router();
const todoController = require("../controllers/todos");

//   Domestics Animals Page
router.get("/", todoController.allTodos);

// Export Router
module.exports = router;
