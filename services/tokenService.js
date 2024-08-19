const jwt = require( 'jsonwebtoken' );

class TokenService {

  create = ( user ) => {
    const payload = { email: user.email };
    const token = jwt.sign( payload, process.env.ACCESS_KEY, { expiresIn: '1h' } );
    return token;
  };

}

const tokenService = new TokenService();

module.exports = tokenService;