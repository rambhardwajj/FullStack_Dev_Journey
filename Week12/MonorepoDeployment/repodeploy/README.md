<!-- This is a demo file for how to create a monorepo with react next and express project and also contans all the files needed in out system to start deploying on the remote aws etc server .  -->

make a turbo repo 
make 3 apps react next and express backend  
we have ui in packages and make common with zod dependencies  
we use these in frontend ( client react and next ( just the types)) and in backend the actual zod object for validation 


<!-- Step 1. -->
	make a turbo repo folder
		npx create-turbo@latest 
	then empty the apps folder , then in the apps folder 
		npx create-next-app@latest
		npx create vite@latest
		mkdir express-backend 
		cd express-backend
		npm init -y
		tsc --init 
		mkdir src 
		cd src 
		touch index.ts

<!-- Step 2. -->
	Introduce a new common package
	cd packages 
	mkdir common
	cd common 
	npm init -y 
	tsc --init 
	npm i zod
	mkdir src 
	cd src 
	touch index.ts -> make a new type in this file and then export it and infer it 
		Demo File :-
			import {z} from "zod"
			export const UserInput = z.object({
				email: z.string(),
				password: z.string()
			})
			export type UserInput = z.infer<typeof UserInput>

<!-- Step 3. -> make ui and common available to the main apps -->
	3.1
		make  ui available because it will be used by both client react and client next
		how to make it available ?
			in client react -> in dependencies add 
				"ui": "*",
				"common": "*" ,
			then in next.config.js ->
				transpilePackages: ["ui"] ,
			In tsconfig
			"paths": {
				"common":[
					"../../packages/common/src/index.ts"
				]
			} 

<!-- Step 4. -> for backend  -->
		in package.json 
			in scripts add
			    "build": "esbuild ./src/index.js --bundle --platform=node --outfile=dist/index.js" ,
		this converts ts code to js

Now :-
Q. When should you redeply the apps 
A. If there is a change in react then next should not redeploy and if there is a change in just backend the react and next shouldnt redploy but if there is a change in common , then react and next and express backend should redeploy and if there is a change in ui then react and next should redeploy


<!-- Before deploying make some changes  -->
	1. In each file - next , react and express add independent deploy.sh file 
	deploy.sh -> this file is used to restart that specific app/process when ever this is called on a ec2 server.
		Add the code to the deploy.sh ( see files ).
	2. in global package.json add few more scripts to start all the projects (react , next and express independently)
		"start:react": "cd apps/client-react/dist && serve -p 3001",
		"start:next": "cd apps/client-next && npm run start",
		"start:express": "cd apps/express-backend && node dist/index.js"

<!-- CI/CD Workflow file  -->
CI/CD files -> yaml files which represent what should happen when a commit takes place 
	This is the main thing that redeploys everything on the internet



<!-- ---------------------------------------------------------------------------------------------------------------------------------------------------- -->

<!-- How To Deploy this now  -->
Follow the steps in image wStepsForCiCd and see the video week 9 and week 12 monorepo deploy
Git hub repo -> https://github.com/100xDevs-hkirat/week-12-monorepo-full/tree/master

<!-- Who will start the workflows? -->
A. Github will start the workflows 

<!-- How ? -->
A. Make a folder name .github
	make a folder workflow in it 
	 make a file ( yml )  
	 -> client-next-deploy.yml
	 -> client-next-deploy.yml
	 -> client-next-deploy.yml
