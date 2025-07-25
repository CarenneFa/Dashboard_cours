import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Home from "./components/Home";
import CourseTracker from "./components/Courses/CourseTracker";
import CourseDetail from "./components/Courses/CourseDetail";
import NotesTracker from "./components/Notes/NotesTracker";
import Notifications from "./components/Notifications";
import Settings from "./components/Settings";
import { ThemeProvider } from "./context/ThemeContext";
// import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/courses" element={<CourseTracker />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/notes" element={<NotesTracker />} />
          <Route path="/grades" element={<NotesTracker />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />

        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;