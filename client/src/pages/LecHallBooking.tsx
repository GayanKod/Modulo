import { Grid } from "@mui/material";
import axios from "axios";
import { timeStamp } from "console";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { isPropertySignature } from "typescript";
import agent from "../api/agent";
import BookingDetails from "../components/LecHallAllocation/BookingPage/BookingDetails";
import Confirmtion from "../components/LecHallAllocation/BookingPage/Confirmation";
import ColorCode from "../components/LecHallAllocation/ColorCode";
import DateSelector, {
  dateValue,
} from "../components/LecHallAllocation/DateSelector";
import { Booking } from "../components/LecHallAllocation/Models";

import Schedule from "../components/LecHallAllocation/Schedule";

import Navbar2 from "../components/Navbar2";
import PageTitle from "../components/PageTitle";
import { useBookingContext } from "../context/BookingContext";
import "../styles/LecHallBooking.scss";
import "../styles/LecHomePage.scss";

function LecHallBooking() {
  const { id } = useParams<{ id: string }>();
  const { selected } = useParams<{ selected: string }>();
  const [loading, setLoading] = useState(false);

  const { bookings } = useBookingContext();
  const { setBookings } = useBookingContext();

  const makeBooking = () => {
    const bookingSlots: Date[] = [];
    const d = dateValue;
    for (var i = 0; i < bookings.length; i++) {
      const date = new Date(d);
      date.setHours(bookings[i]);
      bookingSlots.push(date);
      const newBooking = {
        user: 0,
        classRoomId: parseInt(id as string),
        date: bookingSlots[i].toJSON(),
        startTime: bookingSlots[i].toJSON(),
      };
      addNewBooking(newBooking);
    }
    for (var i = 0; i < bookings.length; i++) {
      console.log(bookingSlots[i].toJSON());
    }
  };

  const addNewBooking = (newBooking: any) => {
    agent.Booking.addBooking(newBooking)
      .then(() => {
        confirmation();
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const confirmation = () => <Confirmtion />;

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
          <Schedule id="" />
          <div className="colorcode">
            <ColorCode hide={false} />
          </div>
        </div>

        <div className="booking-buttons">
          <Link to={"/lec-hall-allocation"}>
            <button
              className="book-button change"
              onClick={() => setBookings([])}
            >
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
            onClick={makeBooking}
          >
            Confirm
          </button>
        </div>
      </div>
    </>
  );
}

export default LecHallBooking;
