import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/Landing";
import TimelinePage from "./pages/Timeline";
import LecHomePage from "./pages/LecHomePage";
import DocumentUpload from "./pages/DocumentUpload";
import DocumentDownload from "./pages/DocumentDownload";
import LoginPage from "./pages/Login";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/document-upload" element={<DocumentUpload />} />
          <Route path="/document-download" element={<DocumentDownload />} />
          <Route  path="/timeline" element={<TimelinePage/>}/>
          <Route path="/lec-hall-allocation" element={<LecHomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
