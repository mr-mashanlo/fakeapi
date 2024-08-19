class UserController {

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

  getAll = ( req, res, next ) => {
    try {
      return res.send( this.users );
    } catch ( error ) {
      next( error );
    }
  };

  getMe = ( req, res, next ) => {
    try {
      const id = req.me.id;
      const user = this.users.find( user => user.id == id );
      return res.send( user );
    } catch ( error ) {
      next( error );
    }
  };

  getOne = ( req, res, next ) => {
    try {
      const id = req.params.id;
      const user = this.users.find( user => user.id == id );
      return res.send( user );
    } catch ( error ) {
      next( error );
    }
  };

};

const userController = new UserController();

module.exports = userController;