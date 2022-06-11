// import { Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { useState } from "react";
import { Link } from "react-router-dom";

import ColorCode from "./ColorCode";
import DateSelector from "./DateSelector";

import Schedule from "./Schedule";

type TimeTableProps = {
  selected: number;
  id: number;
};

export default function TimeTable(props: TimeTableProps) {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const nth = () => {
    switch (date / 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const [count, setCount] = useState(0);

  let day = new Date();
  const [date, setDate] = useState(day.getDate());
  const [month, setMonth] = useState(day.getMonth() + 1);
  const [year, setYear] = useState(day.getFullYear());

  if (props.id) {
    return (
      <>
        <button className="info-button" onClick={() => setOpen(true)}>
          <i className="fa fa-info-circle"></i>
        </button>
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
          <div className="popup">
            <DialogTitle
              className="page-title"
              style={{
                marginBottom: "20px",
                color: "#ff5c55",
                fontSize: "26px",
                fontWeight: "bold",
              }}
            >
              Available Time Slots
            </DialogTitle>
            <DialogContent>
              <DialogContentText style={{ textAlign: "center" }}>
                <DateSelector />
                <Schedule id="disable" />
              </DialogContentText>
              <ColorCode />
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
