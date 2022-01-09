const express = require('express')
const {createProduct,
       showProduct,
       productById, 
       deleteProduct, 
       updateProduct, 
       allProducts, 
       relatedProduct,
       searchProduct,
       photoProduct,
       findProductBySeller
      } = require('../controllers/productController')
const {userById} = require("../middlewares/user")
const {requireSignIn, isAuth, isAdmin} = require("../middlewares/auth")

const router = express.Router()

router.get('/', allProducts)
router.get('/related/:productId', relatedProduct)
router.get('/:productId', showProduct)
router.get('/photo/:productId', photoProduct)
router.post('/search', searchProduct)
router.post('/create/:userId', [requireSignIn, isAuth, isAdmin] , createProduct)
router.delete('/delete/:productId/:userId', [requireSignIn, isAuth, isAdmin] ,deleteProduct )
router.put('/update/:productId/:userId', [requireSignIn, isAuth, isAdmin] , updateProduct )


router.param("userId", userById)
router.param("productId", productById)

module.exports = router  