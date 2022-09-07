const getView = require("../helpers/getView")

class Auth{
    static async login(req,res){
        return getView(res,"auth/login.html")
    }

    static async signup(req,res){
        return getView(res,"auth/signup.html")
    }
}

module.exports = Auth