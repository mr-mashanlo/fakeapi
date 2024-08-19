require( 'dotenv' ).config();
const cors = require( 'cors' );
const express = require( 'express' );
const errorMiddleware = require( './middlewares/errorMiddleware' );
const authRouter = require( './routers/authRouter' );
const postRouter = require( './routers/postRouter' );

const app = express();
app.use( cors( { origin: '*' } ) );
app.use( express.json() );
app.use( '/auth', authRouter );
app.use( '/posts', postRouter );
app.use( errorMiddleware );

const start = async () => {
  try {
    app.listen( process.env.PORT, () => console.log( `Server is running on port ${process.env.PORT}` ) );
  } catch ( error ) {
    console.log( error );
  }
};

start();