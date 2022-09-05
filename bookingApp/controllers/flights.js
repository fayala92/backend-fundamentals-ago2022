const getView = require("../helpers/getView")

function getHome(req,res){
    return getView(res,"index.html")
}

function search(req,res){
    return getView(res,"search.html")
}

module.exports = {
    getHome,
    search
}


