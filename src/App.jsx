import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import HomePage from "./pages/HomePage";
import CourseTracker from "./pages/Courses/CourseTracker";
import CourseDetail from "./pages/Courses/CourseDetail";
import NotesTrackerPage from "./pages/NotesTrackerPage";
import NotificationsPage from "./pages/NotificationsPage";
import SettingsPage from "./pages/SettingsPage";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/courses" element={<CourseTracker />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/notes" element={<NotesTrackerPage />} />
          <Route path="/grades" element={<NotesTrackerPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;