var mongoose = require('mongoose');

var AptSchema = new mongoose.Schema({
 name: {type: String, minlength: 1, maxlength: 20,required: true},
 date: {type: Date, required: true},
 time: {type: Date, required: true},
 complain: {type: String, minlength: 10, required: true},
}, {timestamps: true})

var Apt = mongoose.model('Apt', AptSchema); 