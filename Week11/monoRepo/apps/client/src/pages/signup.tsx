import { Signup } from "ui";
import axios from "axios";

export default function SignUpPage( ){
	return <div >
		<Signup onClick={  (username:string, password:string)=>{
			alert(username) 
			axios.post( "/api/signup",{
				username, 
				password
			} )

		}} />
	</div>
}