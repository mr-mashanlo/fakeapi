const jwt = require( 'jsonwebtoken' );
const { Unauthorized } = require( '../services/error' );

const authMiddleware = async ( req, res, next ) => {

  const token = req.headers.authorization ? req.headers.authorization.split( ' ' )[ 1 ] : null;
  if ( !token ) {
    return next( new Unauthorized( 'Access denied' ) );
  }

  const verifiedToken = jwt.verify( token, process.env.ACCESS_KEY, ( error, decoded ) => { return error || decoded; } );
  if ( verifiedToken instanceof Error ) {
    return next( new Unauthorized( 'Your token has expired' ) );
  }

  next();
};

module.exports = authMiddleware;