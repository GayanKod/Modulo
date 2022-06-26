import { Grid } from "@mui/material";
import Navbar2 from "../components/Navbar2";
import docManagerHome from "../assets/img/docManagerHome.png";
import lecHallHome from "../assets/img/lecHallHome.png";
import NoticeHome from "../assets/img/NoticeHome.png";
import activityHome from "../assets/img/activityHome.png";
import "../styles/HomePage.scss";
import FeatureCard from "../components/HomePage/FeatureCard";
import Footer from "../components/Footer/Footer";

function HomePage() {
  return (
    <div style={{ backgroundColor: " #f5e9fc" }}>
      <Navbar2 />

      <div style={{ padding: "10%" }}>
        <Grid
          container
          spacing={4}
          sx={{ filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }}
        >
          <FeatureCard
            name={"Document Manager"}
            image={docManagerHome}
            path={"/document-upload"}
            height={"200px"}
          />
          <FeatureCard
            name={"Lecture Hall and Lab allocation"}
            image={lecHallHome}
            path={"/lec-hall-allocation"}
            height={"150px"}
          />
          <FeatureCard
            name={"Notice Board"}
            image={NoticeHome}
            path={"/noticeboard"}
            height={"200px"}
          />
          <FeatureCard
            name={"Activity Timeline"}
            image={activityHome}
            path={"/document-upload"}
            height={"150px"}
          />
        </Grid>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
