const Router = require( 'express' );
const router = new Router();
const authController = require( '../controllers/authController' );

router.post( '/signin', authController.signin );
router.post( '/signup', authController.signup );
router.get( '/refreshtoken', authController.refreshToken );

module.exports = router;