Cookie 
Set-Cookie
localhost:3000/api/auth/session

Till hour 1
	the first req sent the html with the signup button and then quickly the request is sent to the backend and the user 
	is signed up automatically and hence there is still the issue of waterfalling 

How to fix this?
	ServerSideProps

Humps in OAuth
	1. node 
	2. Client Secrets and Token
	3. useSession hook 
	4. getServerSession hook
	