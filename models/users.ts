import * as mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
	username:{
		type:String,
		required:true,
		trim:true
	},
	email:{
		type:String,
		required:true,
		unique:true
	},
	password:{
		type:String,
		required:true
	},
	mobile:{
		type:String,
		required:true
	},
	gender:{
		type:String,
		enum:["Male","Female"]
	},
	language:{
		type:String,
		enum:["Hindi","English"]
	},
	maritalStatus:{
		type:String,
		enum:["Married","Unmarried","Others"],
		required:true
	},
	dob:{
		type:String,
		required:true
	},
	time:{
		type:String,
	},
	profile:{
		type:String,
	}
},{timestamps:true})

export const users = mongoose.model("user",userSchema)