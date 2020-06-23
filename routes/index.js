var express = require("express");
var router  = express.Router();
var data = require("../data.json"); //include json data file
var convo = [];	//array to store conversation as object of message and reply

// function'to match keywords to find reply
function check(str){
	
	var token_1 = str.includes("weather");
	var token_2 = str.includes("meeting");
	
	if(token_1){
		if(str.includes("today")){
			return data.weather_today;
		}
		else if(str.includes("tomorrow")){
				return data.weather_tomorrow;
		}
	}
	else if(token_2){
		
		if(str.includes("today")){
			
			return data.meeting_today;	
		}
		else if(str.includes("tomorrow")){
			
			return data.meeting_tomorrow;
			
		}
	}
	
}

// index route or messenger route

router.get("/",function(req,res){
	res.render("new",{convo:convo});
});


// post message to messenger

router.post("/",function(req,res){
	
	var ques = req.body.ques;
	var ans = check(ques);
	var chat = { text : ques , reply : ans };
	convo.push(chat);
	console.log(convo);
	res.render("new",{convo:convo});
		
});


module.exports = router;