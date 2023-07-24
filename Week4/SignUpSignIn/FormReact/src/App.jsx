import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from "./SignUp.jsx"; 
import SignIn from "./SignIn.jsx"; 
import Appbar from "./AppBar.jsx";
import AddCourse from './AddCourses.jsx';
import Courses from './Courses.jsx';
import Course from './Course.jsx';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil'; 

function App() {
    return (
        <div style={{ width: "100vw", height : "100vh", backgroundColor: "#eeeeee"}}>

            <RecoilRoot>
                <Router>
                    <Appbar />
                    <Routes>
                        <Route path="/addcourse" element={<AddCourse />} />
                        <Route path="/course/:courseId" element={<Course />} />
                        <Route path="/courses" element={<Courses />} />
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signup" element={<SignUp />} />
                    </Routes>
                </Router>
            </RecoilRoot>
        </div>
    )
}

export default App
