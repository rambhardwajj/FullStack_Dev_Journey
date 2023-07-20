const express = require("express");
const app = express();
const fs = require('fs');
const jwt = require('jsonwebtoken');

app.use(express.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];
 
// Reading data from file | if file doesnt exist initialising to empty array
try{
    ADMINS = JSON.parse(fs.readFileSync('admins.json', 'utf-8'));
    USERS = JSON.parse(fs.readFileSync('users.json', 'utf-8'));
    COURSES = JSON.parse(fs.readFileSync('courses.json', 'utf-8'));
}catch{
    ADMINS = [];
    USERS = [];
    COURSES = [];
}
const secretKey= "asfg";

const generateTok = (user) =>{
  const payload = { username : user.username};
  return jwt.sign(payload, secretKey, {expiresIn: '1h'});
}

const authenticateTok = (req, res, next)=>{
    const authHeader = req.headers.authorisation;
    if(authHeader){
      const token = authHeader.split(' ')[1];
      jwt.verify(tok, secretKey, (err, user)=>{
        if( err){
          return res.sendStatus(400);
        }
        res.user = user;
        next();
      });
    }else{
      res.sendStatus(401);
    }
}

// Admin routes
app.post("/admin/signup", (req, res) => {
  // logic to sign up admin
  const username = req.body.username;
  const password = req.body.password;
  const admin = ADMINS.find( a => a.username=== username );
  if( admin ){
    res.sendStatus(403).json({message : "Username occupied"});
  }else{
    const newAdmin = { username , password};
    ADMINS.push(newAdmin);
    fs.writeFileSync('admins.json', JSON.stringify(ADMINS), 'utf-8');
    const tok = generateTok(newAdmin);
    res.json({message : "Admin created successfully", tok});
  }
});

app.post("/admin/login",  (req, res) => {
  // logic to log in admin
  const {username , password }= req.headers;
  const admin = ADMINS.find( a => a.username === username && b.password === password );
  if(admin){
    const tok = generateTok(admin);
    res.sendStatus(200).json({message : "logged In ", tok});
  }else{
    res.sendStatus(401).json({message: "no user found"});
  }
});

app.post("/admin/courses", authenticateTok, (req, res) => {
  // logic to create a course
  const course = req.body;
  course.id = COURSES.length+1;
  COURSES.push(course);
  fs.writeFileSync('courses.json', JSON.stringify({COURSES}));
  res.sendStatus(200).json({message : "course created"});
});

app.put("/admin/courses/:courseId", authenticateTok, (req, res) => {
  // logic to edit a course
  const currId = req.params.courseId;
  const course = COURSES.find( c=> c.id === currId);
  if(course){
    Object.assign(course, req.body);
    fs.writeFileSync('courses.json', JSON.stringify(COURSES));
  }else{
    res.sendStatus(404).json({message : "no course of this id "});
  }
});

app.get("/admin/courses", authenticateTok, (req, res) => {
  // logic to get all courses
  res.sendStatus(200).json({courses : COURSES });
});

// User routes
app.post("/users/signup", (req, res) => {
  // logic to sign up user
  const {username , password} = req.body;
  const user = USERS.find( u => u.username === username );
  if( user){
    res.sendStatus(401).json({message : " user already exist"});
  }else{
    const newUser = {username, password};
    USERS.push(newUser);
    fs.writeFileSync('users.json', JSON.stringify(USERS));
    const tok = generateTok(newUser);
    res.sendStatus(200).json({ message : "signed up", tok});
  }
});

app.post("/users/login", (req, res) => {
  // logic to log in user
  const {username , password }= req.headers;
  const user = USERS.find(a => a.username === username && a.password === password);
  if( user){
    tok = generateTok(user);
    res.sendStatus(200).json({ message : "logged in", tok});
  }else{
    res.sendStatus(400).json({message : "user no found"});
  }
});

app.get("/users/courses",  authenticateTok ,(req, res) => {
  // logic to list all courses
  res.sendStatus(200).json( { courses : COURSES });
});

app.post("/users/courses/:courseId", authenticateTok, (req, res) => {
  // logic to purchase a course
  const course = COURSES.find(c => c.id === req.params.courseId);
  if(course){
    const user= USERS.find(a=> a.username === req.user.username);
    if(user){
      if (!user.purchasedCourses) {
        user.purchasedCourses = [];
      }
      user.purchasedCourses.push(course);
      fs.writeFileSync('users.json', JSON.stringify(USERS));
      res.json({ message: 'Course purchased successfully' });
    }else{
      res.status(403).json({ message: 'User not found' });
    }
  }else{
    res.sendStatus(400).json({ message : "course not found "});
  }
});

app.get("/users/purchasedCourses", authenticateTok, (req, res) => {
  // logic to view purchased courses
  const user = USERS.find(u => u.username === req.user.username);
  if (user) {
    res.json({ purchasedCourses: user.purchasedCourses || [] });
  } else {
    res.status(403).json({ message: 'User not found' });
  }
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
