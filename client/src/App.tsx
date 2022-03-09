import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection";
import DocumentUploader from "./components/DocumentManager/Document-uplaod/DocumentUploader";
import LandingPage from "./pages/Landing";
import LecHomePage from "./pages/LecHomePage";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Router>
        <Routes>
          {/* <Route path="/" element={<HeroSection />} /> */}
          <Route path="/" element={<DocumentUploader />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/lec-hall-allocation" element={<LecHomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
