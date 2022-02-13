import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection";
import LecHomePage from "./components/LecHallAllocation/LecHomePage";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Router>
        <Routes>
          <Route path="/" element={<LecHomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
