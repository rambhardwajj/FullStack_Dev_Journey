import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { useState } from 'react';
import { Typography } from '@mui/material';


function AddCourse(){

	const [title , setTitle] = useState("");
	const [ description, setDescription] = useState("");

	return (<div>
			<div style={{ display : "flex", justifyContent : 'center'}}>
				<div style={{
					paddingTop  : 130
					}}> 
					<Typography  variant={"h6"}>
						ADD COURSE 
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
							setTitle(e.target.value);
						}}
						fullWidth={true}
						label="Title" 
						variant="outlined"/>
					<br /> <br />
					<TextField 
						onChange={(e) =>{
							setDescription( e.target.value);
						}}
						fullWidth={true}
						label="Discription" 
						variant="outlined" />
					<br />
					<br />

					<Button 
						size='large' 
						variant="contained"

						onClick={()=>{
							function callback2(data){
								localStorage.setItem("token", data.token);
								console.log(data);

							}
							function callback1(res){
								res.json().then(callback2)
							}
							fetch( "http://localhost:3000/admin/courses", {
								method : "POST", 
								body : JSON.stringify({
									title : title ,
									description : description,
									imageLink : "",
									published : true
								}),
								headers : {
									"Content-type": "application/json",
									"Authorization": "Bearer "+ localStorage.getItem("token")
								}
							}).then(callback1)
							
						}}> Add Course</Button>
				</Card>
			</div>



		</div>
	)
}

export default AddCourse;