import { useState } from "react";
import "../styles/LecHomePage.scss";
import TableDetails from "./LecHallAllocation/TableDetails";

export default function LecHomePage() {
  const [btn, setBtn] = useState("lec");

  return (
    <>
      <div className="nav">
        <h2 className="logo">
          <a href="/">modulo</a>
        </h2>
        <h3 className="user">
          <a href="#">user</a>
          <i className="fas fa-solid fa-user"></i>
        </h3>
      </div>
      <div className="container">
        <h1 className="page-title">Lecture Hall and Lab Allocation</h1>
        <div className="buttons">
          <button
            onClick={() => {
              setBtn("lec");
            }}
            style={{
              background: btn === "lec" ? "#5a189a" : "#ffffff",
              border: btn === "lec" ? "none" : "solid grey 2px",
              color: btn === "lec" ? "white" : "grey",
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
              border: btn === "lab" ? "none" : "solid grey 2px",
              color: btn === "lab" ? "white" : "grey",
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
