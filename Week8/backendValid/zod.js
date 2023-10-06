import {z} from "zod"

let titleInputProps = z.object({
	title : z.string().min(1).max(50),
	description : z.string().min(1).max(100)
})

router.post('/todos', ( req, res) =>{
	const safeParsedInput = titleInputProps.safeParse(req.body);
	if( !safeParsedInput){
		res.sendStatus(401);
	}
	let title = safeParsedInput.data.title;
	let description = safeParsedInput.data.description;

})