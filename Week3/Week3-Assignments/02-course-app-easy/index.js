const express = require('express');
const app = express();

app.use(express.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];

const midWareAdminAuthentication = ( req, res , next)=>{
  const { username , password} = req.header;
  const admin = ADMINS.find(admin => admin.username === username  && admin.password === password);
  if( admin !=null ){
    next();
  }else{
    res.sendStatus(400);
  }
}
const midWareUserAuthentication = ( req, res, next)=>{
  const { username , password } = req.headers;
  const user = USERS.find( user => user.username === username );
  if( user == null){
    res.status(403).json({ message: 'User authentication failed' });
  }else{
    req.user = user;  // Add user object to the request
    next();
  }
}
 

// Admin routes
app.post('/admin/signup', (req, res) => {
  // logic to sign up admin
  const { username , password } = req.body;
  const newAdmin =  { username, password };
  const admin = ADMINS.find( admin => admin.username === username);
  if( admin == null){
    ADMINS.push(newAdmin);
    res.json({ message: 'Admin created successfully' });
  }else{
    res.sendStatus(400);
  }
});



app.post('/admin/login', midWareAdminAuthentication ,(req, res) => {
  // logic to log in admin
  res.json({message : "logged in "});
});

app.post('/admin/courses', (req, res) => {
  // logic to create a course
  const course= req.body;
  course.id = Date.now();
  COURSES.push(course);
  res.json({ message: 'Course created ', courseId: course.id });
});

app.put('/admin/courses/:courseId', (req, res) => {
  // logic to edit a course
  const newCourse = req.body;
  const courseId = parseInt(req.params.courseId);
  const course = COURSES.find(c => c.id === courseId);
  if(course){
    Object.assign(course, req.body); // copying and updating old from new 
    res.json({ message: 'Course updated successfully' });
  }else{
    res.status(404).json({ message: 'Course not found' });
  }
});

app.get('/admin/courses', (req, res) => {
  // logic to get all courses
  res.sendStatus(200).json({ courses: COURSES });
});

// User routes
app.post('/users/signup', (req, res) => {
  // logic to sign up user
  // const { username , password }  = req.body;
  const user = {
    username: req.body.username,
    password: req.body.password,
    purchasedCourses: []
  }
  
  USERS.push(user);
  res.json({ message: 'User created successfully' });

});

app.post('/users/login', midWareUserAuthentication ,(req, res) => {
  // logic to log in user
  res.json({ message : "logged in " });
  
});

app.get('/users/courses', (req, res) => {
  // logic to list all courses
  const allCourses = COURSES.filter(c=>c.published);
  res.json({ courses: allCourses });
});

app.post('/users/courses/:courseId', (req, res) => {
  // logic to purchase a course
  const courseId = parseInt(req.params.courseId);
  const course = COURSES.find(c => c.id === courseId && c.published);
  if (course) {
    req.user.purchasedCourses.push(courseId);
    res.json({ message: 'Course purchased successfully' });
  } else {
    res.status(404).json({ message: 'Course not found or not available' });
  }
});

app.get('/users/purchasedCourses', (req, res) => {
  // logic to view purchased courses
  const purchasedCourses = COURSES.filter(c => req.user.purchasedCourses.includes(c.id));
  res.status(200).json({purchasedCourses});
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
