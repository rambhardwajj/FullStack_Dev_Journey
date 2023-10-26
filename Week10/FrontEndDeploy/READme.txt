in server folder in week 10 
notice in index.js file 
	app.use(express.static("public"));
	app.use("/*", (req, res) => {
		res.sendFile(path.join(__dirname, "/public/index.html"))
	})

this line means whatever file is in server/public folder you will run on port 3000 of a specific port is not defined 
and hence our both frontend and backend code will run on the same port 
hence this eliminates the problem of cors and our backend and frontend can directly communicate with each other


in frontend folder 
	run 
		npm run build 
	it will create a dist folder 
	what it does is it converts the react application into html css and js
	and this converted code is in the dist folder . 
	and all the js code is in a single file in the assets folder of dist 

	All we need to do is now serve this code to a http port
	SERVE is one such library which lets you do it . 
		npm i -g serve

	go to the dist server 
	run 
		serve -p 5173 
		this will serve on http port in 5173
	
	Q. Question is how can you do it with backend ?
	A. by command ->  cd ../admin-client && npm run build && rm -rf ../server/public && mkdir -p ../server/public && mv ./dist/* ../server/public && cd ../server && node index.js
		in server folder, in package.json file 
			there is a script "start" which has this command 

		read this command and you ll understand what this command do
		 
		 what it does is
	    A.  go to the frontend folder then run -> npm run build = a dist folder containing all the html+js+css file 
			is made and then this command removes the public folder in the server folder and make a new public folder 
			and move dist folder from frontend to this public folder , go to the parent server folder and run node index.js

	