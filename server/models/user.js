var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
 name: {
 	type: String,
 	minlength: 1,
 	maxlength: 20,
 }}, {timestamps: true})

var User = mongoose.model('User', UserSchema); 