import mongoose from "mongoose";

let alreadyConnected = false;

export async function ensureDbConnected(){
	if(alreadyConnected){
		return ;
	}
	alreadyConnected = true;
	await mongoose.connect('mongoose+srv://url');
}

