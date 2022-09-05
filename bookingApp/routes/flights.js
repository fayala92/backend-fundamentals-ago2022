const express = require("express")
const path = require("path")

const router = express.Router()

router.get("/flights", (req,res)=>{
    return res.sendFile(path.join(__dirname, "..", "views", "index.html"))
})

module.exports = router