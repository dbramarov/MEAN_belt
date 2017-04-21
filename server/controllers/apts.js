var mongoose = require('mongoose');
var Apt = mongoose.model('Apt');

module.exports = {

	new: function(req, res){
			Apt.find({date: req.body.date}, function(err, apt){
				if(err){
					res.json(err)
				}
				console.log(apt.length)
				if(apt.length >= 3){
					res.json({errors:"To many apointments today!"})
				}
				else{
							Apt.create({name: req.params.user, date: req.body.date ,time: req.body.time ,complain: req.body.complain}, function(err, apt){
								if(err){
									res.json(err);
								}
								else{
									res.json(apt);
								}
							})	
				}					
													
			})
	},

	getAps: function(req, res){
		Apt.find({}, function(err, aps){
			if(err){
				res.json(err);
			}
			else{
				res.json(aps);
			}
		})
	},	

	remove: function(req, res){

		Apt.findOne({_id: req.params.id}, function(err, apt){
			if(err){
				res.json(err)
			}
			if(apt.name == req.params.user){
				Apt.deleteOne({_id: req.params.id}, function(err, apt){
					if(err){
						res.json(err)
					}
					else{
						res.json({apt})
					}
				})
			}
			else{
				res.json({error: "You may only delete your own apointments"})
			}
		})
	},	
}