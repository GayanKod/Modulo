// import { ClassRooms } from "../Details";
import LecHallBooking from "./LecHallBooking";
import lechall from "../../../assets/img/lechall.png";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { Item } from "../Models";
import axios from "axios";
import TimeTable from "../HomePage/TimeTable";

type BookingProps = {
  id: string;
  selected: string;
};

function BookingDetails(props: BookingProps) {
  const [classroom, setClassroom] = useState<Item | null>(null);

  useEffect(() => {
    axios
      .get(`https://localhost:5000/api/ClassRoom/id/${props.id}`)

      .then((classes) => setClassroom(classes.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (classroom) {
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
            : {classroom!.id}
          </Grid>
          <Grid item xs={4}>
            Classroom Name
          </Grid>
          <Grid item xs={8}>
            {`: ${
              props.selected === "Lecture-halls" ? "Lecture Hall" : "Lab"
            } ${classroom.id}`}
          </Grid>
          <Grid item xs={4}>
            Hall Capacity
          </Grid>
          <Grid item xs={8}>
            : {classroom.capacity}
          </Grid>
          <Grid item xs={4}>
            Hall Location
          </Grid>
          <Grid item xs={8}>
            {`:  Building - ${classroom.buildingNumber}, Floor - ${classroom.floorNumber}`}
          </Grid>
          <Grid item>
            <TimeTable
              selected={parseInt(props.selected)}
              id={parseInt(props.id)}
              page={1}
            />
          </Grid>
        </Grid>
      </>
    );
  } else return <></>;
}

export default BookingDetails;
