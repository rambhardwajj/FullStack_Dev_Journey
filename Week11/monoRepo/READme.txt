
Steps to make a package 
	1. in packages folder make a newFolder you wanna make a package of  -> 
		and make this packages accessible to all the files -> Steps to do this 
			1. make a new Folder in packages 
			2. npm init -y 
			3. tsc --init 
			4. make a new folder inside the folder named -> component | src | etc etc according to your package folder 
			5. then in package.json of the file add this 
				"main": "src/index.ts",
  				"types": "src/index.ts",
			6. then in the folder make a new file index.ts
			7. export all the files from the inside folder ( components | src | etc) 
				in the index.ts file
				eg : export * from "./components"  in index.ts file 

			8. If you want your folder inside the packages to be accessible to all the files directly 
				in apps/client folder there is a next.config.js file add 
					transpilePackages: ["ui", "db", etc etcc all the package name you wanna make accessible ]

	2. In NextJs to make a monorepo :-
		1. make a new dir in \apps
			eg : client 
		2. in client 
			run command :-
				npx create-next-app@latest
				choose options and choose No in AppDir part
		3. Now in src folder 
				in pages make all the client components and in src there will be a folder api make all the backend route inside api 
			hence your backend and frontend will run on the same port 
				eg : frontend signup route= localhost:3000/signup
					 backend  signup route= localhost:3000/api/signup
		4. Few practices 
			Folders that the monorepo contains :-
				1. highlevel apps/client(anyMainFolder);
				2. in packages folder main package folder :
					1. ui  		-> components( contains all the ui components )
					2. db		-> src( contains index.ts file (for scehema defination of mongodb) a lib folder for connecting mongoose.connect etc)
					3. store 	-> src( contains atoms & selectors folder) ( index.ts file ( for exporting all the atoms & selectors))

