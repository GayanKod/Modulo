import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing";
import LecHomePage from "./pages/LecHomePage";
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
          <Route path="/lec-hall-allocation" element={<LecHomePage />} />
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
