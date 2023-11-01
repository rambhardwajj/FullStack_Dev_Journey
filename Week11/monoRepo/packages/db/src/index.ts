
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	username: { type : String }, 
	password : { type : String},
	purchasedCourse : [{ type : mongoose.Schema.Types.ObjectId , ref: 'Course'}]
})

const adminSchema = new mongoose.Schema({
	username: {type : String},
	password: {type : String}
})

const courseSchema = new mongoose.Schema({
	title: {type : String},
	description : {type : String},
	price : Number,
	imageLink: String
})

export const  User = mongoose.model('User', userSchema);
export const  Admin = mongoose.model('Admin', adminSchema);
export const  Course = mongoose.model('Course', courseSchema);