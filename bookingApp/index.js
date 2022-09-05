const express = require("express")
// Destructuring
const { port } = require("./config")
const flights = require("./routes/flights")

const app = express()

//MIDDLEWARES

//x-www-form-urlencoded
app.use(express.urlencoded({
    extended:true
}))

//raw/json
app.use(express.json())

//Routes

app.use(flights)

// index, root, home
app.get("/",(req, res)=>{
    
    return res.send("<h1>Hola mundo</h1>")
})

app.listen(port,()=>{
    console.log(`Listening on: http://localhost:${port}`)
})
