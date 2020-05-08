var express=require("express"),
    router=express.Router(),
    Car=require("../models/carDetails.js");
router.post("/addcar",function(req,res){
	var model=req.body.model,
		
		vehicleno=req.body.vehicleno,
		
		seatingcap=req.body.seatingcap,
		
		rent_day=req.body.rent_day;
	
	const car= {model:model,vehicleno:vehicleno,seatingcap:seatingcap,rent_day:rent_day};
	Car.create(car,function(err,car){
		if(err)
		{
			console.log(err);
			res.send(err);
		}
		else
		{
			console.log(car);
			res.send(car);
		}
	});
});
module.exports = router;