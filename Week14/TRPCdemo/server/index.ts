import { publicProcedure, router } from './trpc';
import {z} from "zod";
import { createHTTPServer } from '@trpc/server/adapters/standalone';
 
const todoInputType = z.object({
	title : z.string(),
	description : z.string() 
	// if you make a change here or add something here , the trpc client will automatically suggest you with the updated trpc client  
})
const appRouter = router({
	createTodo : publicProcedure
		.input(todoInputType)
		.mutation(async (opts)=>{
			console.log("hi there")
			const title = opts.input.title;
			const description = opts.input.description;

			// do DB stuff here 
			return {
				id : "1"
			}
		}),
	signUp: publicProcedure
		.input(z.object({
			email:z.string(),
			password: z.string()
		}))
		.mutation(async (opts) => {
			let email = opts.input.email;
			let password= opts.input.password;
			
			// Do validation
			// Do database stuff here 
			// get the token 

			let token = "234df";
			return {
				token 
			}
		})
	});
	
	const server = createHTTPServer({
		router: appRouter,
	  });
	   
	server.listen(3000);

	// Export type router type signature,
	// NOT the router itself.
export type AppRouter = typeof appRouter;