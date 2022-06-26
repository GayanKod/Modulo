import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

type FeatureProps = {
  name: string;
  image: string;
  path: string;
  height: string;
};

function FeatureCard(props: FeatureProps) {
  return (
    <Grid item xs={6}>
      <Link to={props.path}>
        <div className="home-box">
          <h2>{props.name}</h2>
          <div style={{ textAlign: "right" }}>
            <img src={props.image} alt={props.name} height={props.height} />
          </div>
        </div>
      </Link>
    </Grid>
  );
}

export default FeatureCard;
