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
import "../styles/LecHallBooking.scss";
import "../styles/LecHomePage.scss";

function LecHallBooking() {
  const { id } = useParams<{ id: string }>();
  const { selected } = useParams<{ selected: string }>();
  const [loading, setLoading] = useState(false);

  const { bookings } = useBookingContext();
  const { setBookings } = useBookingContext();

  // const [newBooking, setNewBooking] = useState({
  //   user: 0,
  //   classRoomId: 0,
  //   date: "",
  //   startTime: "",
  // });

  // const { user, classRoomId, date, startTime } = newBooking;

  // const makeBooking = () => {
  //   const bookingSlots: Date[] = [];
  //   const d = dateValue;
  //   for (var i = 0; i < bookings.length; i++) {
  //     const date = new Date(d);
  //     date.setHours(bookings[i]);
  //     bookingSlots.push(date);

  //     setNewBooking({
  //       ...newBooking,
  //       user: 0,
  //       classRoomId: parseInt(id as string),
  //       date: bookingSlots[i].toDateString(),
  //       startTime: bookingSlots[i].toDateString(),
  //     });

  //     addNewBooking();
  //   }
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
          <BookingDetails selected={selected as string} id={id as string} />
        </div>

        {/* <hr
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
        </div> */}

        {/*-----------------------------------Form--------------------------------------------------------------------*/}

        <div className="Lec-hall-Form"></div>

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
            // onClick={makeBooking}
            // onChange={makeBooking}
          >
            Confirm
          </button>
        </div>
      </div>
    </>
  );
}

export default LecHallBooking;
