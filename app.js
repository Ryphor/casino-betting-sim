const express          = require("express");
const app              = express();
const progressBar      = require("progressbar.js")
const simulators       = require("./simulators/simulators.js")
app.set("view engine", "ejs");
app.use(express.static("public"));

//ROUTES
app.get("/", function(req, res){
    res.render("index");
})

app.get("/simulate", function(req, res){
    var strat = Number(req.query.strat);
    var balance = Number(req.query.balance);
    var unit = Number(req.query.unit);
    var rounds = Number(req.query.rounds);
    
    var data = simulators.run3000times(balance, unit, rounds)
    
    res.render("index", {data: data});
})

app.listen(3000, function() {
    console.log("Casino Simulator has started successfully.");
});
