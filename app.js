var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
	PORT        = process.env.PORT || 3000

var indexRoutes = require("./routes/index");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));
app.set("view engine","ejs");



app.use("/", indexRoutes);

app.listen(PORT,function(){
	console.log("sever started!!");
});