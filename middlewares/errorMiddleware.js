const { GeneralError } = require( '../services/errorService' );

// eslint-disable-next-line no-unused-vars
const errorMiddleware = ( err, req, res, next ) => {
  if ( err instanceof GeneralError ) {
    return res.status( err.getCode() ).json( { code: err.code, message: err.message } );
  }
  return res.status( 500 ).json( { code: err.code, message: err.message } );
};

module.exports = errorMiddleware;