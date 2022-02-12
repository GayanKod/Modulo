import{BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <>
      <Navbar/>
      <Router>
        <Routes>
          <Route  path="/" element={<HeroSection />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
