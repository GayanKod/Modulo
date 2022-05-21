import { useState } from "react";

export default function DateSelector() {
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
    switch (date % 10) {
      case 1: {
        if (date == 11) {
          return "th";
        }
        return "st";
      }

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

  return (
    <div className="date">
      <button
        disabled={count == 0 ? true : false}
        className="date-arrow"
        onClick={subtractDate}
        style={{ cursor: "pointer" }}
      >
        <i className="fa fa-arrow-left" style={{ marginRight: "30px" }}></i>
      </button>

      <p id="date" style={{ display: "inline", padding: "5px" }}>
        {days[day.getDay()]}, {date} {nth()} of {months[month - 1]},{year}
      </p>
      <button
        className="date-arrow"
        onClick={addDate}
        style={{ cursor: "pointer" }}
      >
        <i className="fa fa-arrow-right" style={{ marginLeft: "30px" }}></i>
      </button>
    </div>
  );
}
