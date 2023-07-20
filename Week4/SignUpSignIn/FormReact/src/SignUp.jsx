import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { useState } from 'react';
import { Typography } from '@mui/material';

function SignUp(){

	const [email , setEmail] =  useState("");
	const [password, setPassword] =  useState("");
	return <div>
		<div style={{ display : "flex", justifyContent : 'center'}}>
			<div style={{
				paddingTop  : 150
				}}> 
				<Typography  variant={"h6"}>
				Welcome to course App , Sign Up below 
				</Typography>  
			</div>
		</div>
		<div style={{ display : "flex", justifyContent : 'center'}}>
			<Card variant="outlined"  style={{ 
					width : 400,
					padding : 20
			}}>
      			<TextField 
					onChange={(e) =>{
						setEmail(e.target.value);
					}}
					fullWidth={true}
					label="Email " 
					variant="outlined"/>
				<br /> <br />
				<TextField 
					onChange={(e) =>{
						setPassword( e.target.value);
					}}
					fullWidth={true}
					label="Password" 
					variant="outlined" />
				<br />
				<br />

				<Button size='large' variant="contained"
					onClick={()=>{
						function callback2(data){
							localStorage.setItem("token", data.token);
							console.log(data);
						}
						function callback1(res){
							res.json().then(callback2);
						}
						fetch( "http://localhost:3000/admin/signup", {
							method : "POST", 
							body : JSON.stringify({
								username : email ,
								password : password
							}),
							headers : {
								"Content-type": "application/json"
							}
						}).then(callback1)
					}}> Sign Up</Button>
			</Card>
		</div>
	</div>
}

export default SignUp;