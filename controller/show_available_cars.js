var express=require("express"),
    router=express.Router(),
    Car=require("../models/carDetails.js");
router.get("/show_available_cars",function(req,res){
	var customer_name=req.body.customer_name,
		customer_phone=req.body.customer_phone,
		issueDate=req.body.issueDate,
		returnDate=req.body.returnDate,
		seating_cap=req.body.seating_cap,
		pickupTime=req.body.pickupTime,
		customer=	{
			car_no:null,
			customer_name:customer_name,
			customer_phone:customer_phone,
			issueDate:issueDate,
			returnDate:returnDate,
			seating_cap:seating_cap,
			pickupTime:null};
		var showcars=[];
		Car.findAll({},function(err,available){
			if(err)
			{
				res.send(err);
			}
			else
			{
				var no=available.vehicleno;
				Book.findAll({car_booked:})
			}
		});
});