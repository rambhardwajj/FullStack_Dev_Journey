import { measure } from "helpful-decorators";
import { once } from "helpful-decorators";

class DateClass {
	private timeZone : string;
	constructor( timeZone : string){
		this.timeZone= timeZone
	}

	@once
	getTime(){
		console.log("wayyy");
		var d = new Date();
		return d.getTime();
	}

	@measure   
	expensiveOperation(){
		const st = new Date()
		let c =0 ;
		for(let i =0 ;i< 100000000; i++){
			c++;
		}
		const end = new Date()
		// Or 
		return  end.getTime() -st.getTime() ;
	}
}

const obj  = new DateClass("IND");
const res = obj.expensiveOperation(); 
obj.getTime();
obj.getTime();
obj.getTime();
obj.getTime();

console.log(res);