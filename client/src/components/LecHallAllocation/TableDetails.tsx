import { useEffect, useState } from "react";
import { HallDetails, LabDetails } from "./Details";

import { Item } from "./Models";

import { Link } from "react-router-dom";
import TimeTable from "./TimeTable";

interface Props {
  selected: string;
  open?: boolean;
  item?: Item;
}

function TableDetails({ selected }: Props) {
  const lecHalls = HallDetails.map((item) => (
    <Row item={item} selected={selected} />
  ));
  const labs = LabDetails.map((item) => (
    <Row item={item} selected={selected} />
  ));

  switch (selected) {
    case "lec":
      return <>{lecHalls}</>;

    case "lab":
      return <>{labs}</>;
    default:
      return <></>;
  }
}

function Row({ item, selected }: Props) {
  console.log("Row");
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState<number[]>([]);

  const hiddenTable = {
    borderBottom: "none",
  };

  const toggleShown = (id: number) => {
    const shownState = shown.slice();
    const index = shownState.indexOf(id);

    setShown(shownState);

    if (index >= 0) {
      shownState.splice(index, 1);
      setShown(shownState);
    } else {
      shownState.push(id);
      setShown(shownState);
    }
  };

  if (!item || !shown) {
    return <></>;
  }

  return (
    <>
      <tr key={item.id}>
        <td className="hide">{item.id}</td>
        <td className="hidden">
          <button
            className="hidden expand-button"
            onClick={() => {
              toggleShown(item.id);
              setOpen(!open);
            }}
          >
            {open ? (
              <i className="fa fa-angle-up"></i>
            ) : (
              <i className="fa fa-angle-down"></i>
            )}
          </button>
        </td>
        <td>{item.name}</td>
        <td className="hide">{item.capacity}</td>
        <td className="hide">{item.location}</td>
        <td>
          <TimeTable selected={selected} id={item.id} />
        </td>
        <td>
          {/* <Link to={"/lec-hall-allocation/booking"}> */}
          <button className="book-button">Book</button>
          {/* </Link> */}
        </td>
      </tr>

      {shown.includes(item.id) && (
        <tr className="hidden" style={{ backgroundColor: "#f8f8f8" }}>
          <td className="hidden" colSpan={12} style={{ paddingBottom: "20px" }}>
            <h3
              className="hidden"
              style={{
                color: "#555555",
                textAlign: "left",
                padding: "20px 20px 20px 30px",
                backgroundColor: "#e8e8e8",
              }}
            >
              {item.name}
            </h3>
            <table className="details-table hidden" style={hiddenTable}>
              <div className="thead">
                <thead>
                  <tr>
                    <th>Hall Id</th>
                    <th>Capacity</th>
                    <th>Location</th>
                  </tr>
                </thead>
              </div>

              <div className="tbody">
                <tbody>
                  <tr>
                    <td style={hiddenTable}>{item.id}</td>
                    <td style={hiddenTable}>{item.capacity}</td>
                    <td style={hiddenTable}>{item.location}</td>
                  </tr>
                </tbody>
              </div>
            </table>
          </td>
        </tr>
      )}
    </>
  );
}

export default TableDetails;
