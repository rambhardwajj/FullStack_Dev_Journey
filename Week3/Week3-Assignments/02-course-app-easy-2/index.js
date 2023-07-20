const express = require("express");
const app = express();

app.use(express.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];

const secretKey = "privateKey"; // replace this with your own secret key

const generateJwtTokUs = (user) => {
  const payload = { username: user.username };
  return jwt.sign(payload, secretKey, { expiresIn: "1h" });
};

const generateJwtTokAd = (user) => {
  const payload = { username: user.username };
  return jwt.sign(payload, secretKey, { expiresIn: "1h" });
};

const authenticateJWT = (req, res, next) => {
  const authenticationHeader = req.headers.authorization;

  if (authenticationHeader) {
    const tok = authenticationHeader.split(" ")[1];
    jwt.verify(tok, secretKey, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  }else{
    res.send(401);
  }
};


// Admin routes-------------------------------------------------------------
app.post("/admin/signup", (req, res) => {
  // logic to sign up admin
  const admin = req.body;
  existingAdmin = ADMINS.find((a) => a.username === admin.username);
  if (existingAdmin) {
    res.sendStatus(401);
  } else {
    const tok = generateJwtTokAd(admin);
    res.send(200).json({ message: "Admin created successfully", token: tok });
  }
});

app.post("/admin/login", (req, res) => {
  // logic to log in admin
  const { username, password } = req.headers;
  const admin = ADMINS.find(
    (a) => a.username === username && a.password === password
  );

  if (admin) {
    const tok = generateJwtTokAd(admin);
    res.json({ message: "Logged in ", tok });
  } else {
    res.status(403).json({ message: "Authentication failed" });
  }
});
// ------------------------------------------------------

app.post("/admin/courses", authenticateJWT, (req, res) => {
  // logic to create a course
  const course = req.body;
  course.id = COURSES.length + 1;
  COURSES.push(course);
  res.json({ message: "Course created successfully", courseId: course.id });
});

app.put("/admin/courses/:courseId",authenticateJWT, (req, res) => {
  // logic to edit a course
  const currId = req.params.courseId;
  const IndexOfcurrId = COURSES.findIndex(c => c.id=== currId);
  if(IndexOfcurrId>=0){
    const updatedCourse = { ...COURSES[IndexOfcurrId],  ...req.body};
    COURSES[IndexOfcurrId] = updatedCourse;
    res.json({ message: 'Course updated successfully' });
  } else {
    res.status(404).json({ message: 'Course not found' });
  }
});

app.get("/admin/courses", authenticateJWT , (req, res) => {
  // logic to get all courses
  res.json({courses : COURSES});
});
//--------------------------------------------------------------------------------
// User routes
app.post("/users/signup",  (req, res) => {
  // logic to sign up user
  const username = req.body.username; 
  const password= req.body.password;
  const existingUser = USERS.find(a=> a.username === username);
  if( existingUser==null){
    USERS.push(req.body);
    const tok = generateJwtTokUs(req.body);
    res.json({ message: 'User created successfully', token: tok })
  }else{
    res.sendStatus(400).json({ message : "username already exists"});
  }
});

app.post("/users/login", (req, res) => {
  // logic to log in user
  const username = req.headers.username;
  const password = req.headers.password;
  const user = USERS.find(a => a.username === username && a.password === password)
  if(user){
    const tok = generateJwtTokUs;
    res.sendStatus(200).json({ message : "logged in",  token : tok});
  }else{
    res.sendStatus(401);
  }
});


//------------------------------------------------------------
app.get("/users/courses", authenticateJWT,  (req, res) => {
  // logic to list all courses
  res.json({ courses : COURSES});
});

app.post("/users/courses/:courseId", authenticateJWT,  (req, res) => {
  // logic to purchase a course
  const courseId = req.params.courseId;
  const course = COURSES.find(a => a.id === courseId);
  if(course>=0){
    const user = USERS.find(u => u.username === req.user.username);
    if( user){
      if (!user.purchasedCourses) {
        user.purchasedCourses = [];
      }
      user.purchasedCourses.push(course);
      res.json({ message: 'Course purchased successfully' });
    }else{
      res.status(403).json({ message: 'User not found' });
    }
  }

});

app.get("/users/purchasedCourses", authenticateJWT, (req, res) => {
  // logic to view purchased courses
  const user = USERS.find(u => u.username === req.user.username);
  if (user && user.purchasedCourses) {
    res.json({ purchasedCourses: user.purchasedCourses });
  } else {
    res.status(404).json({ message: 'No courses purchased' });
  }
});

//------------------------------------------------------------------------------

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
