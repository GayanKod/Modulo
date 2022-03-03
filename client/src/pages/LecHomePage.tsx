import { useState } from "react";
import "../styles/LecHomePage.scss";
import TableDetails from "../components/LecHallAllocation/TableDetails";
import Navbar2 from "../components/Navbar2";
import PageTitle from "../components/PageTitle";
import Select from "react-select";

export default function LecHomePage() {
  const options = [
    { value: "lec", label: "Lecture Halls" },
    { value: "lab", label: "Labs" },
  ];
  const [selected, setSelected] = useState(options[0]);
  const title = "Lecture Hall and Lab Allocation";

  const customStyles = {
    option: (provided: any, state: { isSelected: any }) => ({
      ...provided,
      color: state.isSelected ? "white" : "#7b2cbf",
      backgroundColor: state.isSelected ? "#7b2cbf" : "white",
    }),
  };

  return (
    <>
      <Navbar2 />
      <div className="container">
        <PageTitle title={title} />
        <div className="filter">
          <Select
            className="select"
            options={options}
            placeholder={selected.label}
            onChange={(e) => {
              if (e) {
                setSelected(e);
              }
            }}
            styles={customStyles}
          />
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
              <TableDetails selected={selected.value} />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}