// import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useBookingContext } from "../../../context/BookingContext";

import ColorCode from "../ColorCode";
import { Booking } from "../Models";

import Schedule from "../Schedule";

type TimeTableProps = {
  selected: number;
  id: number;
};

export default function TimeTable(props: TimeTableProps) {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const { bookings } = useBookingContext();

  const [selectedDate, setSelectedDate] = useState<string | null>();
  const [bookingList, setBookingList] = useState<Booking[]>([]);

  useEffect(() => {
    axios
      .get(`https://localhost:5000/api/Booking/date/${selectedDate}`)
      .then((c) => {
        bookings.splice(0, bookings.length);

        setBookingList(c.data);
      })
      .catch((e) => console.log(e));
  }, [selectedDate]);

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    console.log(value);
    // console.log("value: " + value);

    setSelectedDate(value);

    // console.log("selectedDate: " + selectedDate);
  };

  if (props.id) {
    return (
      <>
        <button
          className="info-button"
          onClick={() => {
            setOpen(true);
            bookings.splice(0, bookings.length);
          }}
        >
          <i className="fa fa-info-circle"></i>
        </button>
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
          <div className="popup">
            <DialogTitle
              className="page-title"
              style={{
                // marginBottom: "20px",
                color: "#ff5c55",
                fontSize: "26px",
                fontWeight: "bold",
                paddingBottom: "0",
              }}
            >
              Available Time Slots
            </DialogTitle>
            <DialogContent>
              <DialogContentText style={{ textAlign: "center" }}>
                <div style={{ padding: "6%" }}>
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={4}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "black",
                      }}
                    >
                      <label htmlFor="date">Select a date:</label>
                    </Grid>

                    <Grid item xs={8}>
                      <input
                        type="date"
                        style={{ borderRadius: "10px" }}
                        onChange={handleInputChange}
                      />
                    </Grid>
                  </Grid>
                </div>
                <Schedule bookingList={bookingList} />
              </DialogContentText>
              <ColorCode hide={true} />
            </DialogContent>
            <DialogActions>
              <button className="book-button" onClick={handleClose}>
                Select a different hall
              </button>
              <Link
                to={`/lec-hall-allocation/booking/${props.selected}/${props.id}`}
              >
                <button
                  className="book-button"
                  style={{
                    backgroundColor: "#7b2cbf",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  Book
                </button>
              </Link>
            </DialogActions>
          </div>
        </Dialog>
      </>
    );
  } else return <></>;
}
