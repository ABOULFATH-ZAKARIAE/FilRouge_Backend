const express = require("express")
const {salam, signup, singin, signout, findUser} = require('../controllers/authController')
const {userSignupValidator} = require('../middlewares/userValidator')
const {requireSignIn} = require("../middlewares/auth")
const {userById} = require('../middlewares/user')


const router = express.Router()

router.get("/",salam)
router.post("/singnup", userSignupValidator, signup)
router.post("/singnin", singin)

router.get('/find/:id', findUser)

router.get("/singnout", signout)

router.param('userId', userById)


router.get("/hello", requireSignIn, (req, res) => {
    res.send("hello there")
})

module.exports = router