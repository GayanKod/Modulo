// import { Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { fontSize, height, textAlign } from "@mui/system";
import { useState } from "react";
import { Link } from "react-router-dom";
import { cursorTo } from "readline";
import { isConstructorDeclaration } from "typescript";
import { HallDetails, LabDetails } from "./Details";
import Filter from "./Filter";
import { Item, Options } from "./Models";

type TimeTableProps = {
  selected: string;
  id: number;
};

function Schedule() {
  return (
    <table className="timetable">
      <thead style={{}}>
        <tr>
          <th>08:00</th>
          <th>09:00</th>
          <th>10:00</th>
          <th>11:00</th>
          <th>12:00</th>
          <th>13:00</th>
          <th>14:00</th>
          <th>15:00</th>
          <th>16:00</th>
          <th>17:00</th>
          <th>18:00</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}

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

  const addDate = () => {
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8: {
        if (date == 31) {
          setDate(1);
          setMonth(month + 1);
        } else {
          setDate(date + 1);
          console.log(date);
          console.log("date added");
        }

        break;
      }
      case 2: {
        if (year % 4 == 0 && date == 29) {
          setDate(1);
          setMonth(month + 1);
        } else if (year % 4 != 0 && date == 28) {
          setDate(1);
          setMonth(month + 1);
        } else {
          setDate(1);
          console.log(date);
          console.log("date added");
        }

        break;
      }
      case 4:
      case 6:
      case 9:
      case 11: {
        if (date == 30) {
          setDate(1);
          setMonth(month + 1);
          console.log(date);
        } else {
          setDate(date + 1);
          console.log("date added");
        }
        console.log("adding count");

        console.log(count);

        break;
      }
      case 12: {
        if (date == 31) {
          setDate(1);
          setMonth(1);
          setYear(year + 1);
        } else {
          setDate(date + 1);
        }

        break;
      }
      default:
        setDate(date + 1);
    }
    setCount(count + 1);
  };

  function subtractDate() {
    if (count > 0) {
      switch (month) {
        case 1: {
          if (date == 1) {
            setDate(31);
            setMonth(12);
            setYear(year - 1);
          } else {
            setDate(date - 1);
          }

          break;
        }
        case 2:
        case 4:
        case 6:
        case 8:
        case 9:
        case 11: {
          if (date == 1) {
            setDate(31);
            setMonth(month - 1);
          } else {
            setDate(date - 1);
          }

          break;
        }
        case 3: {
          if (year % 4 == 0 && date == 1) {
            setDate(29);
            setMonth(2);
          } else if (year % 4 != 0 && date == 1) {
            setDate(28);
            setMonth(month - 1);
          } else {
            setDate(date - 1);
          }

          break;
        }
        case 5:
        case 7:
        case 10:
        case 12: {
          if (date == 1) {
            setDate(30);

            setMonth(month - 1);
          } else {
            setDate(date - 1);
          }
          break;
        }
        default:
          setDate(date - 1);
      }
    } else return;

    setCount(count - 1);
  }

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
                <div className="date">
                  <button
                    disabled={count == 0 ? true : false}
                    className="date-arrow"
                    onClick={subtractDate}
                    style={{ cursor: "pointer" }}
                  >
                    <i
                      className="fa fa-arrow-left"
                      style={{ marginRight: "30px" }}
                    ></i>
                  </button>

                  <p id="date" style={{ display: "inline", padding: "5px" }}>
                    {days[day.getDay()]}, {date} {nth()} of {months[month - 1]},
                    {year}
                  </p>
                  <button
                    className="date-arrow"
                    onClick={addDate}
                    style={{ cursor: "pointer" }}
                  >
                    <i
                      className="fa fa-arrow-right"
                      style={{ marginLeft: "30px" }}
                    ></i>
                  </button>
                </div>
                {/* <Filter
                  options={options}
                  selected={selectedHall as Options}
                  setSelected={setSelectedHall}
                /> */}

                {/* <div>
              {
                HallDetails.find((item) => {
                  item.id === props.id && HallDetails.includes(item);
                })?.name
              }
            </div> */}
                <Schedule />
              </DialogContentText>
              <div
                className="colors"
                style={{ marginTop: "40px", marginLeft: "20px" }}
              >
                <p>
                  <i className="fas fa-square" style={{ color: "#5a189a" }}></i>
                  <span
                    style={{
                      margin: "10px",
                      color: "grey",
                      fontSize: "12px",
                    }}
                  >
                    BOOKED
                  </span>
                </p>
                <p>
                  <i className="far fa-square" style={{ color: "grey" }}></i>
                  <span
                    style={{
                      margin: "10px",
                      color: "grey",
                      fontSize: "12px",
                    }}
                  >
                    AVAILABLE
                  </span>
                </p>
              </div>
            </DialogContent>
            <DialogActions>
              <button className="book-button" onClick={handleClose}>
                Select another hall
              </button>
              <Link
                to={`/lec-hall-allocation/booking/${props.selected}/${props.id}`}
              >
                {" "}
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
