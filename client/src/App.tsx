import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing";
import LecHallBooking from "./pages/LecHallBooking";
import TimelinePage from "./pages/Timeline";
import LecHomePage from "./pages/LecHomePage";
import DocumentUpload from "./pages/DocumentUpload";
import DocumentDownload from "./pages/DocumentDownload";
import LoginPage from "./pages/Login";
import { BookingPovider } from "./context/BookingContext";

function App() {
  return (
    <>
      <BookingPovider>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            {/* <Route path="/document-upload" element={<DocumentUpload />} /> */}
            {/* <Route path="/document-download" element={<DocumentDownload />} /> */}
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/lec-hall-allocation" element={<LecHomePage />} />
            <Route
              path="/lec-hall-allocation/booking"
              element={<LecHallBooking />}
            />
            <Route
              path="/lec-hall-allocation/booking/:selected/:id"
              element={<LecHallBooking />}
            />

            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Router>
      </BookingPovider>
    </>
  );
}

export default App;
