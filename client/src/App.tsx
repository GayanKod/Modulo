import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing";
import LecHallBooking from "./pages/LecHallBooking";
import TimelinePage from "./pages/Timeline";
import LecHomePage from "./pages/LecHomePage";
import NoticeBoard from "./pages/NoticeBoard";
import DocumentUpload from "./pages/DocumentUpload";
import DocumentDownload from "./pages/DocumentDownload";
import LoginPage from "./pages/Login";
import AdminPanelHome from "./pages/AdminPanel/AdminPanelHome";
import AdminPanelAdmins from "./pages/AdminPanel/Admins/AdminPanelAdmins";
import AdminPanelAdmin from "./pages/AdminPanel/Admins/AdminPanelAdmin";
import AdminPanelNewAdmin from "./pages/AdminPanel/Admins/AdminPanelNewAdmin";
import NoticeboardStudent from "./pages/NoticeboardStudent";
import NoticeboardStaff from "./pages/NoticeboardStaff";
import NoticeForm from "./pages/NoticeEditForm";
import RegistrationPage from "./pages/Registration";
import UserDD from "./components/UserProfileDropdown";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/document-upload" element={<DocumentUpload />} />
          <Route path="/document-download" element={<DocumentDownload />} />
          <Route  path="/timeline" element={<TimelinePage/>}/>
          <Route path="/lec-hall-allocation" element={<LecHomePage />} />
          <Route path="/noticeboard" element={<NoticeBoard />} />
          <Route path="/noticeboard-student" element={<NoticeboardStudent />} />
          <Route path="/noticeboard-staff" element={<NoticeboardStaff />} />
          <Route path="/noticeboard-edit" element={<NoticeForm />} />
          
          <Route
            path="/lec-hall-allocation/booking"
            element={<LecHallBooking />}
          />
          <Route
            path="/lec-hall-allocation/booking/:selected/:id"
            element={<LecHallBooking />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/admin-panel" element={<AdminPanelHome/>} />
          <Route path="/admin-panel/admins" element={<AdminPanelAdmins/>} />
          <Route path="/admin-panel/admins/:userId" element={<AdminPanelAdmin/>} />
          <Route path="/admin-panel/admins/newadmin" element={<AdminPanelNewAdmin/>} />
          <Route path="/ad" element={<UserDD />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
