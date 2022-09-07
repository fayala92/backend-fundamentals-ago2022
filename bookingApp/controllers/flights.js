const getView = require("../helpers/getView")
const Flight = require("../models/Flight")

async function getHome(req,res){
    return getView(res,"index.html")
}

async function getFlights(req,res){
    const result = await Flight.getAll()

    return res.status(result.success?200:400).json(result)
}

async function getSetFlightForm(req,res){
    return getView(res,"/admin/flights/setFlight.html")
}

async function setFlight(req,res){
    const body = req.body
    const result = await Flight.set(body)

    return res.status(result.success?200:400).json(result)
}

function search(req,res){
    return getView(res,"search.html")
}

module.exports = {
    getHome,
    getFlights,
    setFlight,
    getSetFlightForm,
    search
}


