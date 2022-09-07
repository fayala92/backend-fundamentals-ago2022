const { query } = require("../libs/db")

class Flight {
    static getAll(){
        // const flights = await query("SELECT * FROM flights")

        // return flights

        return query("SELECT * FROM flights")
    }

    static set(data){

    }
}

module.exports = Flight