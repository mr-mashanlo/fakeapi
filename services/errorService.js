class GeneralError extends Error {
  constructor( message = '', code = 500 ) {
    super( message );
    this.code = code;
  }

  getCode() {
    return this.code;
  }
}

class BadRequest extends GeneralError {
  constructor( message = '' ) {
    super( message, 400 );
  }
}

class Unauthorized extends GeneralError {
  constructor( message = '' ) {
    super( message, 401 );
  }
}

module.exports = { GeneralError, BadRequest, Unauthorized  };