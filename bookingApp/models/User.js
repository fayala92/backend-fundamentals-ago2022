const { query } = require("../libs/db")
const bcrypt = require("bcrypt")

class User {
    constructor(data){
        const {name,email,password,password_confirm} = data
        
        this.name= name
        this.email = email
        this.password = password
        this.password_confirm = password_confirm
    }

    validate(){
        if(!this.name || !this.email || !this.password || !this.password_confirm){
            return {
                success:false,
                message:"Debes rellenar todos los campos"
            }
        }

        if(this.password !== this.password_confirm){
            return {
                success: false,
                message:"Las contraseñas no coinciden"
            }
        }

        return {
            success: true,
            data:{
                name:this.name,
                email:this.email,
                password:bcrypt.hashSync(this.password,10),
            },
            message:"Registro exitoso"
        }
    }
    // password: la contraseña del formulario
    // user: la consulta del usuario
    static validateCredentials(password,user){

        const userPassword = bcrypt.compareSync(password, user.password)

        if(!userPassword){
            return {
                success:false,
                message:"Las credenciales son incorrectas"
            }
        }

        delete user.password
        return {
            success:true,
            message:"Credenciales correctas",
            data:user
            }

    }

    static async getUserByEmail(email){
        const result = await query("SELECT * FROM users WHERE email = ?",[email])

        if(result.success && result.data[0]){
            return {
                success:true,
                data:result.data[0]
            }
        }

        return {
            success:false,
            message:"Correo no registrado"
        }
    }

    static async add(data){       
        const result = await query(`
            INSERT INTO users(??)
            VALUES(?)
        `,[
            Object.keys(data),
            Object.values(data)
        ])

        if(result.success){
            delete data.password
            return {
                success:true,
                data:data
            }
        }

        return result
    }

    async login(){
        
            
       
    }
}

module.exports = User