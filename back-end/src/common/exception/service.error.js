const HttpStatus = require('http-status-codes');

exports.handlerBadRequest = details => [
  HttpStatus.BAD_REQUEST,
  HttpStatus.getStatusText(HttpStatus.BAD_REQUEST),
  details,
  true,
];

exports.handlerInternalError = details => [
  HttpStatus.INTERNAL_SERVER_ERROR,
  HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR),
  details,
  true,
];

exports.handlerNotFound = details => [
  HttpStatus.NOT_FOUND,
  HttpStatus.getStatusText(HttpStatus.NOT_FOUND),
  details,
  true,
];

exports.handlerThrow = err => [err.statusCode, err.name, err.message, err.isOperational];
