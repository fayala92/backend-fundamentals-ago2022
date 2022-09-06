const getView = require("../helpers/getView")
const Flight = require("../models/Flight")

async function getHome(req,res){
    const flight = new Flight()
    const result = await flight.getAll()

    console.log(result)

    return getView(res,"index.html")
}

function search(req,res){
    return getView(res,"search.html")
}

module.exports = {
    getHome,
    search
}


