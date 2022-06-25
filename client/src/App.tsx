import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing";
import LecHallBooking from "./pages/LecHallBooking";
import TimelinePage from "./pages/Timeline";
import LecHomePage from "./pages/LecHomePage";
import NoticeBoardV1 from "./pages/NoticeBoardV1";
import NoticeBoardV2 from "./pages/NoticeBoardV2";
import DocumentUpload from "./pages/DocumentUpload";
import DocumentDownload from "./pages/DocumentDownload";
import LoginPage from "./pages/Login";

import AdminPanelHome from "./pages/AdminPanel/AdminPanelHome";
import APAdminsPage from "./pages/AdminPanel/Admins/APAdminsPage";
import APEditAdminPage from "./pages/AdminPanel/Admins/APEditAdminPage";
import APNewAdminEditorPage from "./pages/AdminPanel/Admins/APNewAdminEditorPage";
import APEditorsPage from "./pages/AdminPanel/Editors/APEditorsPage";
import APEditEditorPage from "./pages/AdminPanel/Editors/APEditEditorPage";
import APSubscribersPage from "./pages/AdminPanel/Subscribers/APSubscribersPage";
import APEditSubscriberPage from "./pages/AdminPanel/Subscribers/APEditSubscriberPage";
import APNewSubscriberPage from "./pages/AdminPanel/Subscribers/APNewSubscriberPage";
import MyProfileAP from "./pages/AdminPanel/MyProfileAP";

import NoticeboardStudent from "./pages/NoticeboardStudent";
import NoticeboardStaff from "./pages/NoticeboardStaff";
import RegistrationPage from "./pages/Registration";

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
          <Route path="/noticeboard1" element={<NoticeBoardV1 />} />
          <Route path="/noticeboard2" element={<NoticeBoardV2 />} />
          <Route path="/noticeboard-student" element={<NoticeboardStudent />} />
          <Route path="/noticeboard-staff" element={<NoticeboardStaff />} />
       
          
          <Route
            path="/lec-hall-allocation/booking"
            element={<LecHallBooking />}
          />
          <Route
            path="/lec-hall-allocation/booking/:selected/:id"
            element={<LecHallBooking />}
          />

          {/* Admin Panel, Auth*/}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />

          <Route path="/admin-panel" element={<AdminPanelHome/>} />
          <Route path="/admin-panel/admins" element={<APAdminsPage/>} />
          <Route path="/admin-panel/admins/:userId" element={<APEditAdminPage/>} />
          <Route path="/admin-panel/addadmineditor" element={<APNewAdminEditorPage/>} />

          <Route path="/admin-panel/editors" element={<APEditorsPage/>} />
          <Route path="/admin-panel/editors/:userId" element={<APEditEditorPage/>} />

          <Route path="/admin-panel/subscribers" element={<APSubscribersPage/>} />
          <Route path="/admin-panel/subscribers/:userId" element={<APEditSubscriberPage/>} />
          <Route path="/admin-panel/addsubscriber" element={<APNewSubscriberPage/>} />

          <Route path="/admin-panel/myprofile" element={<MyProfileAP/>} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
