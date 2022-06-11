import { useEffect, useState } from "react";
import { ClassRooms } from "./Details";

import { Item } from "./Models";

import { Link } from "react-router-dom";
import TimeTable from "./TimeTable";
import Resources from "./Resources";

interface Props {
  selected: number;
  // open?: boolean;
  item?: Item;
}

function TableDetails({ selected }: Props) {
  const isHall = (c: any) => c.classRoomType == 0;
  const isLab = (c: any) => c.classRoomType == 1;
  const lecHalls = ClassRooms.filter(isHall).map((item) => (
    <Row item={item} selected={selected} />
  ));
  const labs = ClassRooms.filter(isLab).map((item) => (
    <Row item={item} selected={selected} />
  ));

  switch (selected) {
    case 0:
      return <>{lecHalls}</>;

    case 1:
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
      <tr key={item.Id}>
        <td className="hide">{item.Id}</td>
        <td className="hidden">
          <button
            className="hidden expand-button"
            onClick={() => {
              toggleShown(item.Id);
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
        <td>{`${selected == 0 ? "Lecture Hall" : "Lab"} ${item.Id}`}</td>
        <td hidden={selected == 0}>{item.labType}</td>
        <td className="hide">{item.capacity}</td>
        <td className="hide">{`Building: ${item.BuildingNumber}, Floor: ${item.FloorNumber}`}</td>
        <td hidden={selected == 0}>
          <Resources id={item.Id} />
        </td>
        <td>
          <TimeTable selected={selected} id={item.Id} />
        </td>
        <td>
          <Link
            to={`/lec-hall-allocation/booking/${
              selected == 0 ? "Lecture-halls" : "Labs" //chnage to selected if needed
            }/${item.Id}`}
          >
            <button className="book-button" style={{ height: "30px" }}>
              Book
            </button>
          </Link>
        </td>
      </tr>

      {shown.includes(item.Id) && (
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
              {`${selected == 0 ? "Lecture Hall" : "Lab"} ${item.Id}`}
            </h3>
            <table className="details-table hidden" style={hiddenTable}>
              <div className="thead">
                <thead>
                  <tr>
                    <th>Hall Id</th>
                    <th>Capacity</th>
                    <th>Location</th>
                    <th>Resources</th>
                  </tr>
                </thead>
              </div>

              <div className="tbody">
                <tbody>
                  <tr>
                    <td style={hiddenTable}>{item.Id}</td>
                    <td style={hiddenTable}>{item.capacity}</td>
                    <td
                      style={hiddenTable}
                    >{`Building: ${item.BuildingNumber}, Floor: ${item.FloorNumber}`}</td>
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
