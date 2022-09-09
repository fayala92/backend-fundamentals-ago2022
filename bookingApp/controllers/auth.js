const getView = require("../helpers/getView")
const User = require("../models/User")

class Auth {
    static getLoginForm(req,res){
        return getView(res,"auth/login.html")
    }
    
    static async login(req,res){
        const data = req.body
        const user = await User.getUserByEmail(data.email)
        
        if(!user.success){
            return res.status(400).json(user)
        }

        const validation = User.validateCredentials(data.password,user.data)
    
        return res.status(validation.success?200:400).json(validation)
        
    }

    static getSignupForm(req,res){
        return getView(res,"auth/signup.html")
    }
    
    static async signup(req,res){
        const data = req.body
        const user = new User(data)
        const validation = user.validate()
        if(validation.success){
            const result = await User.add(validation.data)
    
            return res.status(result.success?200:400).json(result)
        }
        
        return res.status(400).json(validation)
    }
    
}

    
module.exports = Auth