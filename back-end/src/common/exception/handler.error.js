const HttpStatus = require('http-status-codes');

const { logger } = require("../../config/logger");

const errorHandler = (err, req, res, next) => {
  console.log(err);
  if (!err.isOperational) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: err.message });
  } else {
    res.status(err.statusCode).json({ error: err.message });
  }
  logger.info(err);
};

const configErrorHandler = app => {
  app.use(errorHandler);
};

module.exports = configErrorHandler;
