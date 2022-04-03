import { traceDeprecation } from "process";
import { useState } from "react";
import { isClassStaticBlockDeclaration } from "typescript";
import "../../styles/LecHallBooking.scss";
import "../../styles/LecHomePage.scss";
import { TimeSlotCell } from "./Models";

function TimeSlot({ item }: TimeSlotCell) {
  const [selectedSlot, setSelectedSlot] = useState<number[]>([]);
  const [picked, setPicked] = useState(false);

  return (
    <>
      <td
        key={item}
        style={{ backgroundColor: picked ? "#7b2cbf" : "white" }}
        onClick={() => {
          console.log(picked);
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

          console.log(selectedSlot);
        }}
      ></td>
    </>
  );
}

export default function Schedule() {
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
            <TimeSlot item={item} />
          ))}
        </tr>
      </tbody>
    </table>
  );
}
