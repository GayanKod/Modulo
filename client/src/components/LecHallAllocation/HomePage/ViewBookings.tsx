import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import agent from "../../../api/agent";
import { useBookingContext } from "../../../context/BookingContext";
import PageTitle from "../../PageTitle";
import BookingDetails from "../BookingPage/BookingDetails";
import { Booking, Item } from "../Models";

function ViewBookings() {
  const [myBookings, setMyBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [classId, setClassId] = useState<number | null>(null);
  const [classDeets, setClassDeets] = useState<Item>();

  useEffect(() => {
    agent.Booking.list()
      .then((b) => setMyBookings(b))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    agent.ClassRoomDetails.details(classId as number)
      .then((c) => setClassDeets(c))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, [classId]);

  if (loading) {
    return (
      <TableRow>
        <TableCell>Loading...</TableCell>
      </TableRow>
    );
  }

  if (!myBookings) {
    return (
      <TableRow>
        <TableCell>No More Bookings.</TableCell>
      </TableRow>
    );
  }

  const classType = (id: number) => {
    setClassId(id);
    const t = classDeets?.classRoomType;
    return t == 0 ? "Lecture Hall " : "Lab ";
  };

  const list = myBookings.map((i) => (
    <tr>
      <td>{i.id}</td>
      <td>{classType(i.classRoomId)}</td>
      <td>{i.date}</td>
      <td>{`${i.startTime} - ${i.endTime}`}</td>
      <td>
        <i className="fas fa-edit"></i>
      </td>
      <td>
        <i className="fas fa-trash"></i>
      </td>
    </tr>
  ));

  return (
    <div className="lechall-container">
      <PageTitle title="My Bookings" />

      <div className="table-container">
        <table className="details">
          <thead>
            <tr>
              <th>Id</th>
              <th>Class Room</th>
              <th>Date</th>
              <th>Time Slot</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{list}</tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewBookings;
