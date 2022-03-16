import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing";
import LecHomePage from "./pages/LecHomePage";
import LoginPage from "./pages/Login";
import AdminPanelDashboard from "./pages/AdminPanelDashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/lec-hall-allocation" element={<LecHomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin-panel/dashboard" element={<AdminPanelDashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
