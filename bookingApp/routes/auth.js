const {Router} = require("express")
const AuthController = require("../controllers/auth")

const router = Router()


router.get("/auth/login", AuthController.getLoginForm)
router.get("/auth/signup",AuthController.getSignupForm)

router.post("/api/auth/login",AuthController.login)
router.post("/api/auth/signup",AuthController.signup)

module.exports = router