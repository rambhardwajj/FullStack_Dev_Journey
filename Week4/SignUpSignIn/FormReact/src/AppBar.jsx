import { Typography, formHelperTextClasses } from "@mui/material";
import Button  from "@mui/material/Button";
function Appbar(){
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