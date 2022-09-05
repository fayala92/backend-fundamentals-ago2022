const express = require("express")

const Flights = require("../controllers/flights")

const router = express.Router()

router.get("/flights", Flights.getHome)

router.get("/search", Flights.search)

module.exports = router