const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
app.use(express.json());

const secretKey = "secr3tK3y";

// Define mongodb schemas 

// users schemas 
const userSchema = new mongoose.Schema({
  username : String, 
  password : String, 
  purchasedCourses : [ { type : mongoose.Schema.Types.ObjectId, ref : 'Course'}]
});

// admins schemas 
const adminSchema = new mongoose.Schema({
  username : String ,
  password : String
});

// courses schemas 
const courseSchema = new mongoose.Schema({
  title : String, 
  discription : String , 
  price : Number,
  imageLink : String,
  published : Boolean
})

// Defining Models in mongodb
const User = mongoose.model( 'User', userSchema);
const Admin = mongoose.model( 'Admin', adminSchema);
const Course = mongoose.model( 'Course', courseSchema);

// Connect to mongobd
mongoose.connect('mongodb+srv://kirattechnologies:iRbi4XRDdM7JMMkl@cluster0.e95bnsi.mongodb.net/courses', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" });

// authentication 
const authenticateJwt = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

// Admin routes
app.post('/admin/signup', async (req, res) => {
  // logic to sign up admin
  const {username , password} = req.body;
  const admin = await Admin.findOne({ username });
  if(admin){
    res.sendStatus(400);
  }else{
    const newAdmin = new Admin({username , password});
    newAdmin.save();
    const tok = jwt.sign({ username, role: 'admin' }, secretKey, { expiresIn: '1h' });
    res.json({ message: 'Admin signed up ', tok });
  }
});

app.post('/admin/login', async (req, res) => {
  // logic to log in admin
  const { username, password } = req.headers;
  const admin = await Admin.findOne({ username , password });
  if(admin){
    const tok = jwt.sign({ username, role: 'admin' }, secretKey, { expiresIn: '1h' });
    res.json( {message : "loggned in ", tok});
  }else{
    res.sendStatus(400);
  }
});

app.post('/admin/courses',  authenticateJwt, async (req, res) => {
  // logic to create a course
  const course = new Course(req.body);
  course.save();
  res.json({message: " course created"});
});

app.put('/admin/courses/:courseId', authenticateJwt, async (req, res) => {
  // logic to edit a course
  const course = await Course.findByIdAndUpdate( req.params.courseId, req.body, { new : true});
  if( course){
    res.json({message: "updated"});
  }else{
    res.sendStatus(400);
  }
});

app.get('/admin/courses', authenticateJwt, async (req, res) => {
  // logic to get all courses
  const courses = await Course.find({});
  res.json({ courses });
});

// User routes
app.post('/users/signup', async (req, res) => {
  // logic to sign up user
  const { username , password } = req.body;
  const user = User.findOne( { username });
  if( user ){
    res.sendStatus(400);
  }else{
    const newUser = { username , password};
    newUser.save();
    const tok = jwt.sign({ username, role: 'user' }, secretKey, { expiresIn: '1h' });
    res.json({ message: 'User created successfully', tok });
  }
});

app.post('/users/login', async (req, res) => {
  // logic to log in user
  const {username , password} = req.headers;
  const user = User.findOne( {username , password} );
  if( user ){
    const tok = jwt.sign({ username , role: 'user'}, secretKey, {expiresIn : '1h'});
    res.json({message : 'Logged In ', tok});
  }else{
    res.sendStatus(400);
  }
});

app.get('/users/courses', authenticateJwt, async (req, res) => {
  // logic to list all courses
  const courses = await Course.find({published : true});
  res.sendStatus(200).json({courses});
});

app.post('/users/courses/:courseId', authenticateJwt, async (req, res) => {
  // logic to purchase a course
  const course = await Course.findById(req.params.courseId);
  if(course){
    const user = await User.findOne({ username : req.user.username });
    if(user){
      user.purchasedCourses.push(course);
      await user.save();
      res.json({ message: 'Course purchased successfully' });
    }else{
      res.sendStatus(400);
    }
  }else{
    res.sendStatus(400);
  }
});

app.get('/users/purchasedCourses', authenticateJwt, async(req, res) => {
  // logic to view purchased courses
  const user = await User.findOne( {username : req.user.username});
  if( user ) 
    res.json({ purchsedCouses : user.purchasedCourses || []});
  else {
    res.sendStatus(400);
  }
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
