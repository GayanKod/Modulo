import { useEffect, useRef, useState } from "react";
import "../styles/LecHomePage.scss";
import TableDetails from "../components/LecHallAllocation/TableDetails";
import PageTitle from "../components/PageTitle";
// import Filter from "../components/LecHallAllocation/Filter";
import Select from "react-select";
import Filter from "../components/LecHallAllocation/Filter";
import { Options } from "../components/LecHallAllocation/Models";
import Navbar2 from "../components/Navbar2";

export default function LecHomePage() {
  let options = [
    { value: "lec", label: "Lecture Halls" },
    { value: "lab", label: "Labs" },
  ];

  const [selected, setSelected] = useState(options[0]);

  return (
    <>
      <Navbar2 />
      <div className="container">
        <PageTitle title="Lecture Hall and Lab Allocation" />

        <div className="table-container">
          <Filter
            options={options}
            setSelected={setSelected}
            selected={selected}
          />
          <table className="hall-details">
            <thead>
              <tr>
                <th className="hidden"></th>
                <th className="hide">Hall ID</th>
                <th>Hall Name</th>
                <th className="hide">Hall capacity</th>
                <th className="hide">Hall Location</th>
                <th>More Details</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <TableDetails selected={selected.value} />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
