var path = require("path");

module.exports = function(app){

    app.get("/", function(req,res){
        res.sendFile(path.join(__dirname, "../views/login.html"));
    });

    app.get("/menu", function(req,res) {
        res.sendFile(path.join(__dirname, "../views/menu.html"));
    });

    app.get("/creating", function(req, res){
        res.sendFile(path.join(__dirname, "../views/createOrder.html"));
    });

    app.get("/adding", function(req,res){
        res.sendFile(path.join(__dirname, "../views/addOrderLine.html"));
    });

    app.get("/viewing", function(req,res){
        res.sendFile(path.join(__dirname, "../views/viewOrder.html"));
    });

};