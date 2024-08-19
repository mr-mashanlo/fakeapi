class GeneralError extends Error {
  constructor( msg, code = 500 ) {
    super();
    this.msg = msg;
    this.code = code;
  }

  getCode() {
    return this.code;
  }
}

class BadRequest extends GeneralError {
  constructor( msg ) {
    super( msg, 400 );
  }
}

class Unauthorized extends GeneralError {
  constructor( msg ) {
    super( msg, 401 );
  }
}

module.exports = { BadRequest, Unauthorized,  };