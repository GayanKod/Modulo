// import { Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { fontSize, height } from "@mui/system";
import { useState } from "react";
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
      <thead>
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
  const [selectedHall, setSelectedHall] = useState<Options>();

  let HallOptions: Array<Options> = [];
  let LabOptions: Array<Options> = [];

  let options: Options[] = [];

  let selectOptions = () => {
    for (let i = 0; i < HallDetails.length; i++) {
      return HallOptions.push({
        value: HallDetails[i].id.toString(),
        label: HallDetails[i].name,
      });
    }
    for (let i = 0; i < LabDetails.length; i++) {
      LabOptions.push({
        value: LabDetails[i].id.toString(),
        label: LabDetails[i].name,
      });
    }
    switch (props.selected) {
      case "lec": {
        setSelectedHall(
          HallOptions.find((item) => parseInt(item.value) === props.id)
        );
        console.log(selectedHall);
        options = HallOptions;
        break;
      }
      case "lab": {
        setSelectedHall(
          LabOptions.find((item) => parseInt(item.value) === props.id)
        );
        options = LabOptions;
        break;
      }
      default:
        break;
    }
  };

  const date = new Date();

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
    switch (date.getDate() / 10) {
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

  if (props.id) {
    return (
      <>
        <button
          className="info-button"
          onClick={() => {
            console.log("Time Table");
            setOpen(true);
          }}
        >
          <i className="fa fa-info-circle"></i>
        </button>
        <Dialog
          sx={{
            width: "100vw",
            margin: "auto",
            height: "100vh",
          }}
          open={open}
          onClose={handleClose}
          fullWidth
          maxWidth="md"
        >
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
                  <i
                    className="fas fa-arrow-left"
                    style={{ marginRight: "30px" }}
                  ></i>
                  <h4>
                    {days[date.getDay()]}, {date.getDate()}
                    <sup>{nth()}</sup> of {months[date.getMonth()]},
                    {date.getFullYear()}
                  </h4>
                  <i
                    className="fas fa-arrow-right"
                    style={{ marginLeft: "30px" }}
                  ></i>
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
            </DialogContent>
            <DialogActions>
              <button className="book-button" onClick={handleClose}>
                Book
              </button>
            </DialogActions>
          </div>
        </Dialog>
      </>
    );
  } else return <></>;
}
