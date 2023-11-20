class AppError {
  message
  statusCode

  //Erro gerado pelo cliente
  constructor(message, statusCode = 400) {
    this.message = message
    this.statusCode = statusCode
  }
}

module.exports = AppError