import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from "./SignUp.jsx"; 
import SignIn from "./SignIn.jsx"; 
import Appbar from "./AppBar.jsx";
import AddCourse from './AddCourses.jsx';

function App() {
    return (
        <div style={{ width: "100vw", height : "100vh", backgroundColor: "#eeeeee"}}>
            <Appbar />
            <Router>
                <Routes>
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/addcourse" element={<AddCourse />} />
                    <Route path="/findCourse" element={<FindCourse />} />

                </Routes>
            </Router>
        </div>
    )
}

export default App
