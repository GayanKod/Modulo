import { useState } from "react";
import "../styles/LecHomePage.scss";
import TableDetails from "./LecHallAllocation/TableDetails";
import Navbar2 from "./Navbar2";
import PageTitle from "./PageTitle";

export default function LecHomePage() {
  const [btn, setBtn] = useState("lec");
  const title = "Lecture Hall and Lab Allocation";

  return (
    <>
      <Navbar2 />
      <div className="container">
        <PageTitle title={title} />
        <div className="buttons">
          <button
            onClick={() => {
              setBtn("lec");
            }}
            style={{
              background: btn === "lec" ? "#5a189a" : "#ffffff",
              border: btn === "lec" ? "none" : "solid #c77dff 3px",
              color: btn === "lec" ? "white" : "#c77dff",
            }}
          >
            Lecture Halls
          </button>
          <button
            onClick={() => {
              setBtn("lab");
            }}
            style={{
              background: btn === "lab" ? "#5a189a" : "#ffffff",
              border: btn === "lab" ? "none" : "solid #c77dff 3px",
              color: btn === "lab" ? "white" : "#c77dff",
            }}
          >
            Labs
          </button>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Hall ID</th>
                <th>Hall Name</th>
                <th>Hall capacity</th>
                <th>Hall Location</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              <TableDetails btn={btn} />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
