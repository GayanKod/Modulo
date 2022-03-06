import { useState } from "react";
import { HallDetails, LabDetails } from "./Details";
import Collapse from "@mui/material/Collapse";
import { Box, Typography } from "@mui/material";
import { Item } from "./Models";

interface Props {
  selected?: string;
  open?: boolean;
  item?: Item;
}

let width = window.innerWidth;

function Row({ item }: Props) {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState<number[]>([]);

  const toggleShown = (id) => {
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
            className="hidden expand"
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
          <button className="info">
            <i className="fa fa-info-circle"></i>
          </button>
        </td>
        <td>
          <button>Book</button>
        </td>
      </tr>

      {shown.includes(item.id) && (
        <tr className="hidden" style={{ backgroundColor: "#f8f8f8" }}>
          <td colSpan={12}>
            <h3
              style={{
                color: "#555555",
                textAlign: "left",
                padding: "20px 20px 20px 30px",
                backgroundColor: "#e8e8e8",
              }}
            >
              Hall Details
            </h3>
            <table className="details">
              <thead>
                <tr>
                  <th>Hall Id</th>
                  <th>Capacity</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.capacity}</td>
                  <td>{item.location}</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      )}
    </>
  );
}

function TableDetails({ selected }: Props) {
  const lecHalls = HallDetails.map((item) => <Row item={item} />);
  const labs = LabDetails.map((item) => <Row item={item} />);

  switch (selected) {
    case "lec":
      return <>{lecHalls}</>;

    case "lab":
      return <>{labs}</>;
    default:
      return <></>;
  }
}

export default TableDetails;
