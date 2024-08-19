const tokenService = require( '../services/tokenService' );
const { BadRequest } = require( '../services/errorService' );

class AuthController {

  signin = async ( req, res, next ) => {
    try {
      const { email, password } = req.body;

      if ( email !== 'admin@company.com' ) {
        throw new BadRequest( 'User not found' );
      }

      if ( password !== 'admin12345' ) {
        throw new BadRequest( 'Incorrect password' );
      }

      const token = tokenService.create( { email } );
      return res.send( { token } );
    } catch ( error ) {
      next( error );
    }
  };

  signup = async ( req, res, next ) => {
    try {
      const { email, password, confirm } = req.body;

      if ( email === 'admin@company.com' ) {
        throw new BadRequest( 'Email already exists' );
      }

      if ( password !== confirm ) {
        throw new BadRequest( 'Passwords do not match' );
      }

      const token = await tokenService.create( { email } );
      return res.send( { token } );
    } catch ( error ) {
      next( error );
    }
  };

  refreshToken = async ( req, res, next ) => {
    try {
      const email = 'admin@company.com';
      const token = await tokenService.create( { email } );
      return res.send( { token } );
    } catch ( error ) {
      next( error );
    }
  };

};

const authController = new AuthController();

module.exports = authController;