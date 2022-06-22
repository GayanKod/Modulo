import axios from "axios";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import agent from "../../../api/agent";
import BookingDetails from "./BookingDetails";
import ColorCode from "../ColorCode";
import DateSelector, { dateValue } from "../DateSelector";

import Schedule from "../Schedule";

import Navbar2 from "../../Navbar2";
import PageTitle from "../../PageTitle";
import { useBookingContext } from "../../../context/BookingContext";
import "../../../styles/LecHallBooking.scss";
import "../../../styles/LecHomePage.scss";
import BookingForm from "./BookingForm";
import { Grid } from "@mui/material";

function LecHallBooking() {
  const { id } = useParams<{ id: string }>();
  const { selected } = useParams<{ selected: string }>();
  const [loading, setLoading] = useState(false);

  const { bookings } = useBookingContext();
  const { setBookings } = useBookingContext();

  // =================================================

  //   let history = useHistory();
  // const [submitted, setSubmitted] = useState(false);

  // const handleSubmit = (e) => {

  // e.preventDefault();

  // fetch('http://localhost:8000/orders', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({ cart: 1 }), //dummy data
  // })
  //   .then((response) => {
  //     setSubmitted(true);
  //     return response.json();
  //   })
  //   .then(() => {
  //     if (submitted) {
  //       return history.push('/thank-you-page');
  //     }
  //   });
  // };
  // ==========================================================================
  //   return (
  //   <form onSubmit={handleSubmit}> ... </form>
  //   );

  // const [newBooking, setNewBooking] = useState({
  //   user: 0,
  //   classRoomId: 0,
  //   date: "",
  //   startTime: "",
  // });

  // const { user, classRoomId, date, startTime } = newBooking;

  // const makeBooking = () => {
  // //   const bookingSlots: Date[] = [];
  //   const d = dateValue;
  //   for (var i = 0; i < bookings.length; i++) {
  //     const date = new Date(d);
  //     date.setHours(bookings[i]);
  //     bookingSlots.push(date);

  //     setNewBooking({
  //       ...newBooking,
  //       user: 0,
  //       classRoomId: parseInt(id as string),
  // date: bookingSlots[i].toDateString(),
  //       startTime: bookingSlots[i].toDateString(),
  //     });

  //     addNewBooking();
  // }
  // };

  // const addNewBooking = () => {
  //   // e.preventDefault();
  //   axios
  //     .post("https://localhost:7285/api/Booking/post", {
  //       user,
  //       classRoomId,
  //       date,
  //       startTime,
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // };

  return (
    <>
      <Navbar2 />

      <div className="lechall-container">
        <PageTitle title={"Lecture Hall and Lab Allocation - Booking"} />

        <div className="booking-details">
          <Grid container>
            <Grid item xs={5}>
              <BookingDetails selected={selected as string} id={id as string} />
            </Grid>
            <Grid item xs={7}>
              <BookingForm classId={parseInt(id as string)} />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default LecHallBooking;
