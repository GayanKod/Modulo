import { Key, useEffect, useState } from "react";
import "../../styles/LecHallBooking.scss";
import "../../styles/LecHomePage.scss";
import { Booking, TimeSlotCell } from "./Models";
import axios from "axios";
import { useBookingContext } from "../../context/BookingContext";

type ScheduleProps = {
  bookingList: Booking[];
};

export default function Schedule(props: ScheduleProps) {
  const cells = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

  // const [bookings, setBookings] = useState<number[]>([]);
  const { bookings } = useBookingContext();
  const { setBookings } = useBookingContext();

  const dateBookings: { from: string; to: string }[] = [];

  props.bookingList.map((i) => {
    dateBookings.push({
      from: i.startTime,
      to: i.endTime,
    });
  });

  dateBookings.map((b) => {
    for (
      let i = new Date(b.from).getHours();
      i < new Date(b.to).getHours();
      i++
    ) {
      bookings.push(i);
    }
  });

  const isBooked = (item: number) => bookings.includes(item);

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
          {cells.map((item) => (
            <TimeSlot key={item} isBooked={isBooked(item)} />
          ))}
        </tr>
      </tbody>
    </table>
  );
}

function TimeSlot({ isBooked }: TimeSlotCell) {
  return (
    <>
      <td
        style={{
          backgroundColor: isBooked ? "grey" : "white",
        }}
      ></td>
    </>
  );
}
