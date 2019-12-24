function allTodos(req, res, next) {
  res.status(200).send({
    message: "Hello World"
  });
}

module.exports = {
  allTodos
};
