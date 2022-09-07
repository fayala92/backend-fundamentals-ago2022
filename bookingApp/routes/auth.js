const {Router} = require("express")
const AuthController = require("../controllers/auth")

const router = Router()

//Obtener formularios
router.get("/auth/login", AuthController.login)
router.get("/auth/signup",AuthController.signup)

//Recibir data de los usuarios
router.get("/auth/api/login", AuthController.login)
router.get("/auth/api/signup",AuthController.signup)

module.exports = router