const { GeneralError } = require( '../services/errorService' );

// eslint-disable-next-line no-unused-vars
const errorMiddleware = ( err, req, res, next ) => {
  if ( err instanceof GeneralError ) {
    return res.status( err.getCode() ).json( {
      message: err.message
    } );
  }
  return res.status( 500 ).json( {
    message: err.message
  } );
};

module.exports = errorMiddleware;