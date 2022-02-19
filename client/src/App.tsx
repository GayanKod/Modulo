import{BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LandingPage from "./pages/Landing";
import TimelinePage from "./pages/Timeline";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route  path="/" element={<LandingPage />}/>
          <Route  path="/timeline" element={<TimelinePage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
