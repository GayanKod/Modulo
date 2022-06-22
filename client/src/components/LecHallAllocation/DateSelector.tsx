import { useState } from "react";
import { useBookingContext } from "../../context/BookingContext";

export let dateValue: Date;

function DateSelector() {
  const [count, setCount] = useState(0);
  const d = new Date();
  const [date, setDate] = useState(d);
  const { setDateChanged } = useBookingContext();

  const { setBookings } = useBookingContext();
  const { bookings } = useBookingContext();

  // const addDate = () => {
  //   if (bookings.length > 0) {
  //     setDateChanged(true);
  //   }
  //   date.setDate(date.getDate() + 1);

  //   setDate(date);
  //   setCount(count + 1);
  // };

  // const subtractDate = () => {
  //   if (count == 0) {
  //     return;
  //   }

  //   if (bookings.length > 0) {
  //     setDateChanged(true);
  //   }

  //   date.setDate(date.getDate() - 1);

  //   setDate(date);
  //   setCount(count - 1);
  // };

  // dateValue = date;

  return (
    //   <div className="date">
    //     <button
    //       disabled={count == 0 ? true : false}
    //       className="date-arrow"
    //       onClick={() => {
    //         subtractDate();
    //       }}
    //       style={{ cursor: "pointer" }}
    //     >
    //       <i className="fa fa-arrow-left" style={{ marginRight: "30px" }}></i>
    //     </button>

    //     <p id="date" style={{ display: "inline", padding: "5px" }}>
    //       {date.toDateString()}
    //     </p>

    //     <button
    //       className="date-arrow"
    //       onClick={() => {
    //         addDate();
    //       }}
    //       style={{ cursor: "pointer" }}
    //     >
    //       <i className="fa fa-arrow-right" style={{ marginLeft: "30px" }}></i>
    //     </button>
    //   </div>
    <></>
  );
}

export default DateSelector;
