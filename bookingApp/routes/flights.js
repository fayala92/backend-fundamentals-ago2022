const express = require("express")

const Flights = require("../controllers/flights")

const router = express.Router()

router.get("/flights", Flights.getHome)

router.get("/api/flights", Flights.getFlights)

router.get("/admin/flights/create", Flights.getSetFlightForm)

router.post("/api/flights", Flights.setFlight)

router.get("/search", Flights.search)

module.exports = router