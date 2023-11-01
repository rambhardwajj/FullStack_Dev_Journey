import { Signup } from "ui";
export default function SignUpPage( ){
	return <div >
		<Signup onClick={  (username:string, password:string)=>{
			alert(username) 
			// axios.post( "url",{
			// 	username, 
			// 	password
			// } )

		}} />
	</div>
}