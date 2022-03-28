import { timeStamp } from "console";
import { useParams } from "react-router-dom";
import {
  HallDetails,
  LabDetails,
} from "../components/LecHallAllocation/Details";
import { Item } from "../components/LecHallAllocation/Models";
import Navbar2 from "../components/Navbar2";
import PageTitle from "../components/PageTitle";
import "../styles/LecHallBooking.scss";
import "../styles/LecHomePage.scss";

// type BookingProps = {
//   selected: string;
// };

function LecHallBooking() {
  const { id } = useParams<{ id: string }>();
  const { selected } = useParams<{ selected: string }>();
  const defaultSelectValue = HallDetails.find(
    (item) => item.id === parseInt(id as string)
  );

  return (
    <>
      <Navbar2 />
      <div className="lechall-container">
        <PageTitle title={"Lecture Hall and Lab Allocation - Booking"} />
        <div className="booking-form">
          <div className="hall-name">
            <label>
              Hall
              {/* {props.selected == "lec" ? "Hall" : "Lab"} */}
              <select>
                {(selected as string) == "lec"
                  ? HallDetails.map((item) => (
                      <option
                        selected={
                          item.id == parseInt(id as string) ? true : false
                        }
                        key={item.id}
                        value={item.id}
                      >
                        {item.name}
                      </option>
                    ))
                  : LabDetails.map((item) => (
                      <option
                        selected={
                          item.id == parseInt(id as string) ? true : false
                        }
                        key={item.id}
                        value={item.id}
                      >
                        {item.name}
                      </option>
                    ))}
              </select>
            </label>
          </div>
          <div className="form-date">
            <label>
              Date
              <input type="date" />
            </label>
          </div>
          <div className="duration">
            <label>
              From
              <input type="time" />
            </label>
            <label>
              To
              <input type="time" />
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default LecHallBooking;
