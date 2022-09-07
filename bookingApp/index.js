const express = require("express")
// Destructuring
const { port } = require("./config")
const flights = require("./routes/flights")
const auth = require("./routes/auth")

const app = express()

//MIDDLEWARES

//x-www-form-urlencoded
app.use(express.urlencoded({
    extended:true
}))

//raw/json
app.use(express.json())

//static-files
// app.use('/static',express.static(__dirname+'/static'))
app.use('/static',express.static('static'))


//ROUTES

app.use(flights)
app.use(auth)

// index, root, home
app.get("/",(req, res)=>{
    
    return res.send("<h1>Hola mundo</h1>")
})

app.listen(port,()=>{
    console.log(`Listening on: http://localhost:${port}`)
})
