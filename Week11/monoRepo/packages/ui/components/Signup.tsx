import { Card,TextField, Typography, Button } from "@mui/material"
import { useState, useEffect } from "react"

export function Signup( props :{
	 	onClick : (username: string, password: string) => void
	} ){

	const [ email, setEmail] = useState("");
	const [ password, setPassword] = useState("");
	return <div> 
		<div style={{ marginLeft:40, marginTop: 80,  display: "flex", justifyContent: "center"}} >
			<Card style={{ width: 400, padding : 20}}>
				<Typography> Welcome and Signup </Typography>
				<br /><br />
				<TextField onChange={(event) =>{
					setEmail(event.target.value)
				}} 
				fullWidth={true} label="email" type={"email"}
				/> 
				<TextField onChange={(e) =>{
					setPassword(e.target.value)
				}}
				fullWidth={true} label ="password" type={ "password"}
				/> 
				<Button variant="contained" onClick={ async() =>{
					props.onClick(email, password)
				}}> signup </Button>
			</Card>
		</div>
	</div>
}