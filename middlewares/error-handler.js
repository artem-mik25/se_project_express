const { INTERNAL_SERVER_ERROR } = require("../utils/errors");

const errorHandler = (err, req, res, _next) => {
  const statusCode = err.statusCode || INTERNAL_SERVER_ERROR;
  const message =
    statusCode === INTERNAL_SERVER_ERROR
      ? "An error has occurred on the server"
      : err.message;

  res.status(statusCode).send({ message });
};

module.exports = errorHandler;
