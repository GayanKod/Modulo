import { ClassRooms } from "../Details";
import LecHallBooking from "./LecHallBooking";
import lechall from "../../../assets/img/lechall.png";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

type BookingProps = {
  id: string;
  selected: string;
};

function BookingDetails(props: BookingProps) {
  const classRoom = ClassRooms.find(
    (item) => item.Id === parseInt(props.id as string)
  );
  if (classRoom) {
    return (
      <>
        <Grid container sx={{ padding: "5% 0 0 10%" }}>
          <Grid item xs={12} sx={{ paddingBottom: "5%" }}>
            <h3>Classroom Details</h3>
          </Grid>
          <Grid item xs={4}>
            Classroom ID
          </Grid>
          <Grid item xs={8}>
            : {classRoom!.Id}
          </Grid>
          <Grid item xs={4}>
            Classroom Name
          </Grid>
          <Grid item xs={8}>
            {`: ${
              props.selected === "Lecture-halls" ? "Lecture Hall" : "Lab"
            } ${classRoom.Id}`}
          </Grid>
          <Grid item xs={4}>
            Hall Capacity
          </Grid>
          <Grid item xs={8}>
            : {classRoom.capacity}
          </Grid>
          <Grid item xs={4}>
            Hall Location
          </Grid>
          <Grid item xs={8}>
            {`:  Building - ${classRoom.BuildingNumber}, Floor - ${classRoom.FloorNumber}`}
          </Grid>
        </Grid>
      </>
    );
  } else return <></>;
}

export default BookingDetails;
