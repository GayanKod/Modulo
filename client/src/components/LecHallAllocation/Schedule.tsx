import { traceDeprecation } from "process";
import { useEffect, useState } from "react";
import { isClassStaticBlockDeclaration } from "typescript";
import "../../styles/LecHallBooking.scss";
import "../../styles/LecHomePage.scss";
import { TimeSlotCell } from "./Models";

type ScheduleProps = {
  id: string;
};

export const bookings = [];

function TimeSlot({ item, id }: TimeSlotCell) {
  const [selectedSlot, setSelectedSlot] = useState<number[]>([]);
  const [picked, setPicked] = useState(false);

  useEffect(() => {
    // Update the document title using the browser API
  });

  return (
    <>
      <td
        className={id == "disable" ? "" : "cell"}
        key={item}
        style={{ backgroundColor: picked ? "#7b2cbf" : "white" }}
        onClick={() => {
          if (id != "disable") {
            if (bookings.indexOf(item as never) < 0) {
              bookings.push(item as never);
            } else bookings.splice(bookings.indexOf(item as never), 1);

            console.log(bookings);

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

              // console.log(selectedSlot);
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
