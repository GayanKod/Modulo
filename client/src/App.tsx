import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing";
import LecHomePage from "./pages/LecHomePage";
import NoticeBoard from "./pages/NoticeBoard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/lec-hall-allocation" element={<LecHomePage />} />
          <Route path="/noticeboard" element={<NoticeBoard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
