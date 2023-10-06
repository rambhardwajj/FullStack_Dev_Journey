

// common is an independent module 
// in this module we will try doing work where client needs some import from server / communication 
// why importing from common -> because you dont ever want client to import from server 
// this is just for the developer that when they are writting the code in frontend they just know what types to send 

import { z } from "zod";

export const signUpInput = z.object({
	username : z.string(),
	password : z.string()
})
 

export type SignUpParams = z.infer<typeof signUpInput>;