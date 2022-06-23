import { useState } from "react";
import "../../styles/LecHallBooking.scss";
import "../../styles/LecHomePage.scss";
import { TimeSlotCell } from "./Models";
import { useBookingContext } from "../../context/BookingContext";

type ScheduleProps = {
  id: string;
};

function TimeSlot({ item, id }: TimeSlotCell) {
  const [selectedSlot, setSelectedSlot] = useState<number[]>([]);
  const [picked, setPicked] = useState(false);

  const { setDateChanged } = useBookingContext();
  const { dateChanged } = useBookingContext();

  const { dateBooking } = useBookingContext();
  const { setDateBooking } = useBookingContext();

  const { setBookings } = useBookingContext();
  const { bookings } = useBookingContext();

  const items = [...bookings];

  console.log("items: " + items);

  if (dateChanged) {
    console.log("date CHANGED");

    items.splice(0, items.length);
    console.log("after: " + items);
  }

  const d = new Date();

  return (
    <>
      <td
        className={id == "disable" ? "" : "cell"}
        key={item}
        style={{
          backgroundColor: items.includes(item) ? "grey" : "white",
        }}
        onClick={() => {
          if (id != "disable") {
            if (items.indexOf(item as never) < 0) {
              items.push(item as never);
            } else {
              items.splice(bookings.indexOf(item as never), 1);
            }

            setPicked(!picked);

            if (picked) {
              const pickedState = selectedSlot.slice();
              const index = pickedState.indexOf(item);

              setSelectedSlot(pickedState);

              if (index >= 0) {
                pickedState.splice(index, 1);
                setSelectedSlot(pickedState);
              } else pickedState.push(item);

              setSelectedSlot(pickedState);
            }
          }
        }}
      ></td>
    </>
  );
}

export default function Schedule(props: ScheduleProps) {
  const cells = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

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
            <TimeSlot key={item} item={item} id={props.id} />
          ))}
        </tr>
      </tbody>
    </table>
  );
}
