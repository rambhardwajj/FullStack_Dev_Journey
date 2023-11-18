import {z} from "zod"

export const UserInput = z.object({
	email: z.string(),
	password: z.string()
})

export type UserInput = z.infer<typeof UserInput>

 