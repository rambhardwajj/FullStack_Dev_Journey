import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../server';
//     👆 **type-only** import
 
// Pass AppRouter as generic here. 👇 This lets the `trpc` object know
// what procedures are available on the server and their input/output types.
const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
    }),
  ],
});

async function main(){
	// check the working of createTodo route 
	// let response = await trpc.createTodo.mutate({
	// 	title: "ram",
	// 	description: "yo"
	// })

	// check the working of signUp route 
	let response2 = await trpc.signUp.mutate({
		email: "ram@gmail.com",
		password: "123456"
	})

	// console.log( response);
	console.log( response2);
}

main();