//This file is going to store the structure of our usual data
//The "schema" method used is a JSON  obj that defines the structure and contents of ur data, Schemas represent types of data rather than specific values 

const mongoose = require('mongoose');

// A Mongoose schema defines the structure of the document, document properties, default values, validators, static methods, virtuals, etc.
const scheme = new mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	email:{
		type:String,
		required:true,
		unique:true,
	},
	gender:{
		type:String
	},
	age:Number
});
const userModel = mongoose.model('userModel',scheme);
module.exports = userModel;

