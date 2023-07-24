import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useState } from "react";
import { Card, Typography } from "@mui/material";
import {TextField, Button} from "@mui/material";

function Course(){

	let {courseId} = useParams();
	const [courses, setCourses] = useState([]);

	useEffect( ()=>{
		function callback2(data){
			setCourses(data.courses);
		}
		function callback1(res){
			res.json().then(callback2)
		}
		fetch( "http://localhost:3000/admin/courses/" , {
			method: "GET",
			headers: {
				"Authorization" : "Bearer "+ localStorage.getItem("token")
			}
		}).then(callback1)
	}, []);

	let course =null;
	for( let i =0 ; i< courses.length; i++ ){
		if( courses[i].id == courseId){
			course = courses[i];
		}
	}

	if(!course){
		return <div>
			Loading....
		</div>
	}

	return (
		<div style={{display : "flex" , justifyContent : "center"}}>
			<CourseCard course= {course}> </CourseCard>
			<UpdateCard course= {course}  setCourses= {setCourses} courses= {courses}> </UpdateCard>
		</div>
	)
	
}

function UpdateCard(props){
	
	const [ title , setTitle ] = useState("");
	const [ description, setDescription ] = useState("");
	const [ imageLink , setImageLink ] = useState(""); 
	const course = props.course;

	return (<div>
			<div style={{ display : "flex", justifyContent : 'center'}}>
				<div style={{
					paddingTop  : 130
					}}> 
					<Typography  variant={"h6"}>
						UPDATE COURSE 
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
						label="Updated Title" 
						variant="outlined"/>
					<br /> <br />

					<TextField 
						onChange={(e) =>{
							setDescription( e.target.value);
						}}
						fullWidth={true}
						label="Updated Discription" 
						variant="outlined" />
					<br /> <br />
					
					<TextField 
						onChange={(e) =>{
							setImageLink( e.target.value);
						}}
						fullWidth={true}
						label="ImageLink" 
						variant="outlined" />
					<br /> <br />

					<Button 
						size='large' 
						variant="contained"

						onClick={()=>{
							function callback2(data){
								let updatedCourses = [];
								for(let i =0 ; i< props.courses.length; i++){
									if( props.courses[i].id == course.id ){
										updatedCourses.push( {
											id : course.id,
											title : title,
											description : description,
											imageLink : imageLink
										})
									}else{
										updatedCourses.push(props.courses[i]);
									}
								}
								props.setCourses(updatedCourses);
							}
							function callback1(res){
								res.json().then(callback2)
							}
							fetch( "http://localhost:3000/admin/courses/" + course.id, {
								method : "PUT", 
								body : JSON.stringify({
									title : title ,
									description : description,
									imageLink : imageLink,
									published : true
								}),
								headers : {
									"Content-type": "application/json",
									"Authorization": "Bearer "+ localStorage.getItem("token")
								}
							}).then(callback1)
							
						}}> Update Course</Button>
				</Card>
			</div>
		</div>
	)
}

function CourseCard(props){
	const course = props.course;
	return  <div style={{ display : "flex" , justifyContent : "center"}}>
		<Card style={{ 
			margin: 10,
			width: 300, 
			minHeight : 200
		}}>
		<Typography textAlign={"center"} variant="h6" > {course.title} </Typography>
		<Typography textAlign={"center"} > {course.description} </Typography>
		<img src={course.imageLink} style={{width :300}} />
		</Card>
	</div>
}

export default Course;