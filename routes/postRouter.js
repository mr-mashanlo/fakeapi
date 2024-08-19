const Router = require( 'express' );
const router = new Router();
const postController = require( '../controllers/category/postController' );
const authMiddleware = require( '../middlewares/authMiddleware' );

router.post( '/', authMiddleware, postController.create );
router.get( '/all', authMiddleware, postController.getAll );
router.get( '/:id', authMiddleware, postController.getOne );
router.put( '/:id', authMiddleware, postController.update );
router.delete( '/:id', authMiddleware, postController.delete );

module.exports = router;