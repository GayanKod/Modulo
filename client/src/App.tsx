import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing";
import LecHallBooking from "./pages/LecHallBooking";
import TimelinePage from "./pages/Timeline";
import TimelineFormPage from "./pages/TimelineFormPage";
import LecHomePage from "./pages/LecHomePage";
import DocumentUpload from "./pages/DocumentUpload";
import DocumentDownload from "./pages/DocumentDownload";
import LoginPage from "./pages/Login";
import AdminPanelHome from "./pages/AdminPanel/AdminPanelHome";
import AdminPanelUsers from "./pages/AdminPanel/AdminPanelUsers";
import AdminPanelUser from "./pages/AdminPanel/AdminPanelUser";
import AdminPanelNewUser from "./pages/AdminPanel/AdminPanelNewUser";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/document-upload" element={<DocumentUpload />} />
          <Route path="/document-download" element={<DocumentDownload />} />
          <Route  path="/timeline" element={<TimelinePage/>}/>
          <Route  path="/timelineform" element={<TimelineFormPage/>}/>
          <Route path="/lec-hall-allocation" element={<LecHomePage />} />
          <Route
            path="/lec-hall-allocation/booking"
            element={<LecHallBooking />}
          />
          <Route
            path="/lec-hall-allocation/booking/:selected/:id"
            element={<LecHallBooking />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin-panel" element={<AdminPanelHome/>} />
          <Route path="/admin-panel/users" element={<AdminPanelUsers/>} />
          <Route path="/admin-panel/users/:userId" element={<AdminPanelUser/>} />
          <Route path="/admin-panel/users/newUser" element={<AdminPanelNewUser/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
