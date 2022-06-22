import { Grid } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

import Filter from "../HomePage/Filter";

// const [newBooking, setNewBooking] = useState({
//   user: 0,
//   classRoomId: 0,
//   date: "",
//   startTime: "",
// });

type BookingFormProps = {
  classId: number;
};

const defaultValues = {
  user: 0,
  classRoomId: 0,
  date: "",
  startTime: "",
  endTime: "",
};
const BookingForm = (props: BookingFormProps) => {
  const [newBooking, setNewBooking] = useState(defaultValues);
  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setBookingDate(value);
  };

  const { user, classRoomId, date, startTime } = newBooking;

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    setNewBooking({
      user: 0,
      classRoomId: props.classId,
      date: bookingDate as string,
      startTime: new Date().setHours(from.value).toString(),
      endTime: new Date().setHours(to.value).toString(),
    });

    // agent.Bookings.addBooking().then;
  };

  let options = [
    {
      value: 8,
      label: "8:00",
    },
    {
      value: 9,
      label: "9:00",
    },
    {
      value: 10,
      label: "10:00",
    },
    {
      value: 11,
      label: "11:00",
    },
    {
      value: 12,
      label: "12:00",
    },
    {
      value: 13,
      label: "13:00",
    },
    {
      value: 14,
      label: "14:00",
    },
    {
      value: 15,
      label: "15:00",
    },
    {
      value: 16,
      label: "16:00",
    },
    {
      value: 17,
      label: "17:00",
    },
    {
      value: 18,
      label: "18:00",
    },
  ];

  const [from, setFrom] = useState(options[0]);
  const [to, setTo] = useState(options[0]);
  const [bookingDate, setBookingDate] = useState<string | null>();

  return (
    <div className="booking-form">
      <h3>Enter your booking Details</h3>
      <form onSubmit={handleSubmit} id="form1">
        <Grid container spacing={2}>
          <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
            <label htmlFor="date">Date</label>
          </Grid>

          <Grid item xs={8}>
            <input
              type="date"
              style={{ borderRadius: "10px" }}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
            <label htmlFor="time">From</label>
          </Grid>

          <Grid item xs={8}>
            <Filter
              options={options}
              setSelected={setFrom}
              selected={from}
              id="booking"
            />
          </Grid>
          <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
            <label htmlFor="time">To</label>
          </Grid>
          <Grid item xs={8}>
            <Filter
              options={options}
              setSelected={setTo}
              selected={to}
              id="booking"
            />
          </Grid>
          <Grid item xs={6} sx={{ paddingTop: "5%" }}>
            <div className="booking-buttons">
              <Link to={"/lec-hall-allocation"}>
                <button className="book-button change">
                  Select a Different Hall
                </button>
              </Link>
            </div>
          </Grid>
          <Grid item xs={6} sx={{ paddingTop: "5%" }}>
            <div className="booking-buttons">
              <button
                type="submit"
                form="form1"
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
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
export default BookingForm;
