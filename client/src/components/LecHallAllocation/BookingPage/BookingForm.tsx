import { Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useBookingContext } from "../../../context/BookingContext";
import Filter from "../HomePage/Filter";
import { Booking } from "../Models";

type BookingFormProps = {
  classId: number;
};

const BookingForm = (props: BookingFormProps) => {
  const { bookingList } = useBookingContext();
  const { setBookingList } = useBookingContext();

  const { setDateChanged } = useBookingContext();
  const { dateChanged } = useBookingContext();

  const [newBooking, setNewBooking] = useState({
    user: 0,
    classRoomId: 0,
    date: "",
    startTime: "",
    endTime: "",
  });

  useEffect(() => {
    axios
      .post("https://localhost:5000/api/Booking/post", newBooking)
      .then(function (response) {
        if (response.status === 200) {
          // confirm(true); //confirm function call
          console.log("added");
        }
      })
      .catch((e) => console.log(e));
  }, [newBooking]);

  const [loading, setLoading] = useState<boolean>();

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    // console.log(value);
    setBookingDate(value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    setLoading(true);

    const d = new Date(bookingDate as string);

    setNewBooking({
      user: 0,
      classRoomId: props.classId,
      date: bookingDate as string,
      // startTime: new Date(d.setHours(from.value)).toJSON(),
      startTime: new Date(d.setHours(from.value + 5)).toJSON(),
      endTime: new Date(d.setHours(to.value + 5)).toJSON(),
    });

    console.log(newBooking);

    // axios
    //   .post("https://localhost:5000/api/Booking/post", newBooking)
    //   .then(function (response) {
    //     if (response.status === 200) {
    //       // confirm(true); //confirm function call
    //       console.log("added");
    //     }
    //   })
    //   .catch((e) => console.log(e));

    // if (loading) {
    //   console.log("loading...");
    // }
  };
  // =================================================================================================

  // const confirm = (added: boolean) => <Confirmation added={added} />;

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
