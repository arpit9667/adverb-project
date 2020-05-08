var express=require("express"),
    app=express(),
	mongoose=require("mongoose"),
	bodyParser=require("body-parser"),
	Book_specific_car=require("./controller/bookSpecific.js"),
	addcar=require("./controller/addcar.js");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect("mongodb://localhost/carDetails",{ useNewUrlParser: true , useUnifiedTopology: true});
app.use( addcar);
app.use(Book_specific_car);
app.listen(process.env.PORT||3000, process.env.IP, function(){
   console.log("Server Has Started!!");
});