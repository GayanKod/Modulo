import { Grid } from "@mui/material";
import { timeStamp } from "console";
import { useParams } from "react-router-dom";
import {
  HallDetails,
  LabDetails,
} from "../components/LecHallAllocation/Details";
import { Item } from "../components/LecHallAllocation/Models";
import Navbar2 from "../components/Navbar2";
import PageTitle from "../components/PageTitle";
import "../styles/LecHallBooking.scss";
import "../styles/LecHomePage.scss";

// type BookingProps = {
//   selected: string;
// };

function LecHallBooking() {
  const { id } = useParams<{ id: string }>();
  const { selected } = useParams<{ selected: string }>();
  const defaultSelectValue = HallDetails.find(
    (item) => item.id === parseInt(id as string)
  );

  return (
    <>
      <Navbar2 />
      <div className="lechall-container">
        <PageTitle title={"Lecture Hall and Lab Allocation - Booking"} />
        <div className="booking-form">
          <Grid container spacing={1} sx={{ width: "100%", margin: "auto" }}>
            <Grid item xs={4} md={2}>
              <label>Hall</label>
            </Grid>
            <Grid item xs={8} md={6}>
              <select className="list">
                {(selected as string) == "lec"
                  ? HallDetails.map((item) => (
                      <option
                        selected={
                          item.id == parseInt(id as string) ? true : false
                        }
                        key={item.id}
                        value={item.id}
                      >
                        {item.name}
                      </option>
                    ))
                  : LabDetails.map((item) => (
                      <option
                        selected={
                          item.id == parseInt(id as string) ? true : false
                        }
                        key={item.id}
                        value={item.id}
                      >
                        {item.name}
                      </option>
                    ))}
              </select>
            </Grid>

            <Grid item xs={4} md={1}>
              <label>Date</label>
            </Grid>
            <Grid item xs={8} md={3}>
              <input type="date" />
            </Grid>
            <Grid item xs={12} md={2}>
              <label>Duration</label>
            </Grid>
            <Grid item xs={2} md={1}>
              <label>From</label>
            </Grid>
            <Grid item xs={4} md={2}>
              <input type="time" />
            </Grid>
            <Grid item xs={2} md={1}>
              <label>To</label>
            </Grid>
            <Grid item xs={4} md={2}>
              <input type="time" />
            </Grid>
          </Grid>

          {/* <div className="hall-name"> */}

          {/* </div> */}
          {/* <div className="form-date"> */}

          {/* </div> */}
          {/* <div className="duration"> */}
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default LecHallBooking;
