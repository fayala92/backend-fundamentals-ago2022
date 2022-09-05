const path = require("path")

const getView = (res,viewName)=>{
    return res.sendFile(path.join(__dirname, "..", "views", viewName))
}

module.exports = getView