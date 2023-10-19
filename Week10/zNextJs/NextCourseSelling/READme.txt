
Start NextJs by 
	npx create-next-app@latest

Changes Made in the course selling app when moved from reactJs to NextJs
	1. in NextJs we use useRouter to navigate from one page to another 
	2. in NextJs Authentication is done using cookies not by headers 
		Because in NextJs while rendering the first page the problem of waterfalling is still not solved if we use headers for Authentication 
		as headers are sent from localStorage and hence, in the first page NextJs renders it doesnt know the Authentication token and hence 
		the first renders doesnt include the user Info page 
	3. In a url like /courses the first render is on the client side in both reactJs ans NextJs because the courses componenet send a useEffect request to the server and hence 
		the very first render takes time , hence what we ll do is in the NextJs courses component we use a function called as getServerSideProps() 
		which sends the request to the data at server side and the initial render happens on the server side. 
	