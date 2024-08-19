const Router = require( 'express' );
const router = new Router();
const userController = require( '../controllers/userController' );
const authMiddleware = require( '../middlewares/authMiddleware' );

router.get( '/all', authMiddleware, userController.getAll );
router.get( '/me', authMiddleware, userController.getMe );
router.get( '/:id', authMiddleware, userController.getOne );

module.exports = router;