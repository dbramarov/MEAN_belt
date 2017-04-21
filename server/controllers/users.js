var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {

	login: function(req, res){
		User.findOne({name: req.body.name}, function(err, user){
			if(err){
				res.json(err);
			}
			else if (!user){
				User.create({name: req.body.name}, function(err, user){
					if(err){
						res.json(err);
					}
					else{
						res.json(user);
					}
				})
			}
			else{
				res.json(user);
			}
		})
	}
}