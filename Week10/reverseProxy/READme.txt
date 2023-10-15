1. How to change the url given by AWS to you domain name like google.com:3000 
 	ie how to point the given url by aws to the specified IP and then your domain name to that ip 

	Watch the tutorial.

2. Now start the backend on aws machine check the steps of week 9

3. How to start your backend on port 80
	a. Ugly way is to start your backend directly on port 80 by app.listen(80, ()=>{}) etcetc ...
   
   Steps till now :- 
   	1. started aws machine 
	2. pulled teh code there 
	3. ran it on port 3000 and it works 
	4. then replaced it at our own domain name 
	5. then see your process working on your domain name 
	6. Now We have to run the app on port 80.
	How :-
	     A process called engineX , we are going to use it as a reverse proxcies.


	* The backend has many process runing on 3000 3001 5173 etc 
		We need something running on port 80 which will, based on the url we are hitting hit either 3000 or 3001 or 5173
		This is whats called a reverse Proxy 

		So ngineX runs on port 80 whose work is to direct the request to the server based on which url is incomming 
		frontend.com -> 80 ( ngineXrunning here will direct it to ) -> :5173


		events {
			worker_connections 1024;
		}
		http {
			server {                                             run a server        
				listen 80;                                       and if req comes to port 80 
				server_name todo-app-backend.100xdevs.com;       and domain name looks something like this then 
                                                                 route 
				location / {                                     the location to  
					proxy_pass http://localhost:3000;            this location
					proxy_http_version 1.1;
					proxy_set_header Upgrade $http_upgrade;
					proxy_set_header Connection 'upgrade';
					proxy_set_header Host $host;
					proxy_cache_bypass $http_upgrade;
				}
			}
		}



Steps :-
	1. Install ngineX on ubuntu machine -> sudo apt-get install nginex
	2. Try to go to port 80 on your website
	3. Now open the nginex.conf file in your ubuntu -> sudo vi /./nginex.conf
	4. sudo rm /./nginex.conf
	   sudo vi /./nginex.conf
	5. now in conf file paste your conf file to this file 
	6. sudo nginex -s reload

SO BASICALLY WE JUST HAVE TO INSTALL THE NGINEX AND EDIT THE FILE AND CONFIGURE IT ACCORDING TO use

Q. Difference between forward proxcies and reverse proxcies 
	see the image "Diff-Forward&Reverse_PROXIES"

Q. What is burp proxcy?
	

