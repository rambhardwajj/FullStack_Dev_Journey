import { Typography, formHelperTextClasses } from "@mui/material";
import Button  from "@mui/material/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Appbar(){
	// const navigate = useNavigate();
	const [userEmail , setUserEmail]  = useState("");

	useEffect( ()=> {
		function callback2(data){
			console.log(data);
			if( data.username){
				setUserEmail(data.username);
			}
		}
		function callback1(res){
			res.json().then(callback2)
		}
		fetch("http://localhost:3000/admin/me", {
			method : 'GET', 
			headers : {
				"Authorization": "Bearer "+ localStorage.getItem("token")
			}
		 }).then(callback1)
		 
	}, []);


	if( userEmail ){
		return (
			<div style={{  padding : 10 , display : "flex" , justifyContent : "space-between"}}>
				<Typography variant= {"h6"}> Courses</Typography>
				<div style={{ display : "flex"}}>
					<div>
						{userEmail}  
					</div>
					<div style={{ padding : 10}}> 
						<Button 
							variant={"contained"}
							onClick={()=>{
								localStorage.setItem( "token",  null);
								window.location = "/"
							}}
							
						> Logout </Button>
					</div>
					
				</div>
			</div>
		)
	}

	return (
		<div style={{  padding : 10 , display : "flex" , justifyContent : "space-between"}}>
			<Typography variant= {"h6"}> Courses</Typography>
			<div style={{ display : "flex"}}>
				<div style={{ padding : 10}}>
					<Button 
						variant={"contained"}
						onClick={()=>{
							window.location = "/signup"
						}}
						
					> Sign Up </Button>
				</div>
				<div style={{ padding : 10}}>
					<Button 
					variant="contained"
					onClick={()=>{
							window.location = "/signin"
						}}
						> Sign In </Button>
				</div>
			</div>
		</div>
	)
}
export default Appbar;