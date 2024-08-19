require( 'dotenv' ).config();
const cors = require( 'cors' );
const express = require( 'express' );
const cookieParser = require( 'cookie-parser' );

const app = express();
app.use( cors( { origin: '*' } ) );
app.use( cookieParser() );
app.use( express.json() );

const start = async () => {
  try {
    app.listen( process.env.PORT, () => console.log( `Server is running on port ${process.env.PORT}` ) );
  } catch ( error ) {
    console.log( error );
  }
};

start();