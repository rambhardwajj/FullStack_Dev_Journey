Q. Difference btw http & https ?
   https is more secure than http 

Q. How is http is less secure than https ?
   Because when we request to a http server anyone who is connected to the same WIFI ROUTER 
   can use a tool called as WIRESHARK and can CAPTURE your NETWORK and he can see all the headers 
   you are sending to the server plus all the cookies,  hence it is not advise to enter any of your 
   password in a http  (Not Secure) website . where as in https all the headers and cookies are encrypted.

Q. What is NETWORK CAPTURE?
   Getting access to your network by someone who is connected to a same wifi using tools like WIRESHARK 


STEPS to connect to https server or implement certificate ( end to end encryption ) :-
   1. go to https://certbot.eff.org
   2. select nginx & select system 
   3. follow the STEPS
   4. install certbot -> sudo snap install --classic certbot
      prepare a certbot command .. copy paste the command from the website
   5. sudo certbot --nginx
   6. give your email ... Y enter
   7. select all by typing .. 1,2,3....
   8. Deployed certificate successfully 
      certbot entered to the nginx file and modified it 
      and all the req to 80 will be redirected to 443
   
   ThereFore 