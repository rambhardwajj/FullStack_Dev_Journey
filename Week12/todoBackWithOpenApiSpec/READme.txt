Steps to make openapi specification backend 
	1. Create folder and initialize the repo . npm init -y , tsc --init
	2. follow the documentation -> https://tsoa-community.github.io/docs/getting-started.html
		to read about Decorators ->https://github.com/NetanelBasal/helpful-decorators/tree/master/src
	3. Steps 
		1. create the model of your application( ie define the type of it ) ( todo.ts )
		2. Define the service  get / post (create) => todoService.ts
		3. Define the controller todosService.ts
		4. add script tsoa in package.json and tsc also as in package.json file ( file ko khol ke dekh le )
		5.  after npm run tsc
			Your backend is up and now we have to make openApi spec file 

	The way to create express code from the files the command is 
		yarn run tsoa routes
	the way to create openApi specification file the command is 
		yarn run tsoa spec

	now after generating the tsoa spec make swagger ui that is a type of ui that helps to make a ui 
	like a Postman to hit the endpoints > https://tsoa-community.github.io/docs/live-reloading.html

	Now introduce clients 
		command-> npx openapi-typescript-codegen -i ./build/swagger.json -o node-client -c fetch
		there will be a new folder create named node-client and in that index.js you export  => DefaultService 
		this default service can be exported any where in your backend file and wherever we want to send the request just 
		add DefaultService.get() and now 
		whenever you make a change in the endpoints it will complaints 
		
