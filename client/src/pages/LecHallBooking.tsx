import { Grid } from "@mui/material";
import { timeStamp } from "console";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import BookingDetails from "../components/LecHallAllocation/BookingPage/BookingDetails";
import ColorCode from "../components/LecHallAllocation/ColorCode";
import DateSelector from "../components/LecHallAllocation/DateSelector";

import Schedule from "../components/LecHallAllocation/Schedule";

import Navbar2 from "../components/Navbar2";
import PageTitle from "../components/PageTitle";
import "../styles/LecHallBooking.scss";
import "../styles/LecHomePage.scss";

function LecHallBooking() {
  const { id } = useParams<{ id: string }>();
  const { selected } = useParams<{ selected: string }>();
  // const { selected } = useParams<{ selected: string }>();
  // const defaultSelectValue = HallDetails.find(
  //   (item) => item.id === parseInt(id as string)
  // );

  return (
    <>
      <Navbar2 />

      <div className="lechall-container">
        <PageTitle title={"Lecture Hall and Lab Allocation - Booking"} />

        <div className="booking-details">
          <BookingDetails selected={selected as string} id={id as string} />
        </div>

        <hr
          style={{
            width: "80%",
            margin: "30px auto 30px auto",
          }}
        ></hr>

        <div className="schedule">
          <h3 style={{ marginBottom: "40px" }}>Pick your time slot</h3>
          <DateSelector />
          <Schedule id={id as string} />
          <div className="colorcode">
            <ColorCode />
          </div>
        </div>

        <div className="booking-buttons">
          <Link to={"/lec-hall-allocation"}>
            <button className="book-button change">
              Select a Different Hall
            </button>
          </Link>
          <button
            className="book-button confirm"
            style={{
              backgroundColor: "#7b2cbf",
              color: "white",

              cursor: "pointer",
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </>
  );
}

export default LecHallBooking;
