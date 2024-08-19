const jwt = require( 'jsonwebtoken' );
const tokenService = require( '../services/tokenService' );
const { BadRequest } = require( '../services/errorService' );

class AuthController {

  constructor() {
    this.users = [
      {
        id: 101,
        name: 'John Doe',
        email: 'johndoe@example.com',
        username: 'johndoe',
        created: 1724050800
      },
      {
        id: 102,
        name: 'Jane Smith',
        email: 'janesmith@example.com',
        username: 'janesmith',
        created: 1724051100
      },
      {
        id: 103,
        name: 'Alice Johnson',
        email: 'alicejohnson@example.com',
        username: 'alicejohnson',
        created: 1724051400
      },
      {
        id: 104,
        name: 'Bob Brown',
        email: 'bobbrown@example.com',
        username: 'bobbrown',
        created: 1724051700
      },
      {
        id: 105,
        name: 'Charlie Davis',
        email: 'charliedavis@example.com',
        username: 'charliedavis',
        created: 1724052000
      }
    ];
  }

  signin = async ( req, res, next ) => {
    try {
      const { email, password } = req.body;
      const user = this.users.find( user => user.email === email );

      if ( !user ) {
        throw new BadRequest( 'User not found' );
      }

      if ( password !== 'user12345' ) {
        throw new BadRequest( 'Incorrect password' );
      }

      const token = tokenService.create( { id: user.id, email } );
      return res.send( { token } );
    } catch ( error ) {
      next( error );
    }
  };

  signup = async ( req, res, next ) => {
    try {
      const { email, password, confirm } = req.body;
      const user = this.users.find( user => user.email === email );

      if ( user ) {
        throw new BadRequest( 'Email already exists' );
      }

      if ( password !== confirm ) {
        throw new BadRequest( 'Passwords do not match' );
      }

      const token = await tokenService.create( { id: 106, email } );
      return res.send( { token } );
    } catch ( error ) {
      next( error );
    }
  };

  refreshToken = async ( req, res, next ) => {
    try {
      const token = req.headers.authorization ? req.headers.authorization.split( ' ' )[1] : null;
      const verifiedToken = jwt.verify( token, process.env.ACCESS_KEY, ( _, decoded ) => { return decoded; } );
      const createdToken = await tokenService.create( { id: verifiedToken.id, email: verifiedToken.email } );
      return res.send( { createdToken } );
    } catch ( error ) {
      next( error );
    }
  };

};

const authController = new AuthController();

module.exports = authController;