import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing";
import LecHallBooking from "./pages/LecHallBooking";
import LecHomePage from "./pages/LecHomePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/lec-hall-allocation" element={<LecHomePage />} />
          <Route
            path="/lec-hall-allocation/booking"
            element={<LecHallBooking />}
          />
          <Route
            path="/lec-hall-allocation/booking/:selected/:id"
            element={<LecHallBooking />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
