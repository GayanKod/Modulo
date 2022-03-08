import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing";
import TimelinePage from "./pages/Timeline";
import LecHomePage from "./pages/LecHomePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route  path="/" element={<LandingPage />}/>
          <Route  path="/timeline" element={<TimelinePage/>}/>
          <Route path="/lec-hall-allocation" element={<LecHomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
