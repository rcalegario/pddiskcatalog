const HttpStatus = require('http-status-codes');

module.exports = function AppError(statusCode, name, message, isOperational) {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.message = message || 'Erro de sistema. Entre em contato com administrador';
  this.statusCode = statusCode || HttpStatus.INTERNAL_SERVER_ERROR;
  this.isOperational = isOperational;
};

require('util').inherits(module.exports, Error);