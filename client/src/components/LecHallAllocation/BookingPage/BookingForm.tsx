// function BookingForm() {
//   return (
//     <>
//       <div className="booking-details">
//         <h3>Booking Form</h3>
//         <form action=""></form>
//       </div>
//     </>
//   );
// }

// export default BookingForm;

import { Grid, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const defaultValues = {
  name: "",
  age: 0,
  gender: "",
  os: "",
  favoriteNumber: 0,
};
const BookingForm = () => {
  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  // const handleSliderChange = (name: string) => (e: any, value: any) => {
  //   setFormValues({
  //     ...formValues,
  //     [name]: value,
  //   });
  // };
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log(formValues);
  };

  const tiemSlots = () => {
    const times = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

    return times.map((t) => (
      <MenuItem key={t} value={t}>
        {`${t}:00`}
      </MenuItem>
    ));
  };

  return (
    <div className="booking-form">
      <h3>Enter your booking Details</h3>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          spacing={4}
          sx={{
            justify: "center",
            flexDirection: "column",
          }}
        >
          <Grid item>
            <label htmlFor="date">Date</label>
            <input type="date" />
          </Grid>
          <Grid item>
            <label htmlFor="date">From</label>
            <input type="time" />
          </Grid>
          <Grid item>
            <label htmlFor="date">To</label>
            <input type="time" />
          </Grid>
          <Grid item>
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
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
export default BookingForm;
