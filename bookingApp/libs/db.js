// const mysql = require("mysql2")
const mysql = require("mysql2/promise")
const { dbHost, dbPort, dbUser, dbPassword, dbName } = require("../config")

// const connection = mysql.createConnection({
//     host:dbHost,
//     port:dbPort,
//     user:dbUser,
//     password: dbPassword,
//     name: dbName
// })

const connection = async()=>{
    const conn = await mysql.createConnection({
        name: dbName,
        host:dbHost,
        port:dbPort,
        user:dbUser,
        password: dbPassword
    })

    return conn
}

const query = async (sql,values)=>{
    const result = await (await connection()).query(sql,values)

    console.log(result)
    return result
}

module.exports = {
    query
}