import { useEffect, useState } from "react";
import { Item } from "../Models";
import { Link } from "react-router-dom";
import Resources from "./Resources";
import TimeTable from "./TimeTable";
import agent from "../../../api/agent";
import axios from "axios";

interface Props {
  selected: number;
  item?: Item;
}

export let classes: Item[];

function TableDetails({ selected }: Props) {
  const [classRooms, setClassRooms] = useState<Item[] | null>(null);
  const [loading, setLoading] = useState(true);

  const isHall = (c: any) => c.classRoomType == 0;
  const isLab = (c: any) => c.classRoomType == 1;

  useEffect(() => {
    agent.ClassRoomDetails.list()
      // axios
      // .get("https://localhost:5000/api/ClassRoom/all")
      .then((classes) => {
        setClassRooms(classes);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <tr>
        <td style={{ textAlign: "center" }}>Loading...</td>
      </tr>
    );

  if (classRooms == null) {
    return (
      <tr>
        <td style={{ textAlign: "center" }}>No Items available yet.</td>
      </tr>
    );
  }

  const getTypebyId = (id: number) =>
    classRooms.find((c) => c.id === id)?.classRoomType;

  const lecHalls = classRooms
    .filter(isHall)
    .map((item) => <Row key={item.id} item={item} selected={selected} />);
  const labs = classRooms
    .filter(isLab)
    .map((item) => <Row key={item.id} item={item} selected={selected} />);

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
      <tr>
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
        <td>{`${selected == 0 ? "Lecture Hall" : "Lab"} ${item.id}`}</td>
        <td hidden={selected == 0}>{item.labType}</td>
        <td className="hide">{item.capacity}</td>
        <td className="hide">{`Building: ${item.buildingNumber}, Floor: ${item.floorNumber}`}</td>
        <td>
          <Resources resourcesUsed={item.classRoom_Resources} />
        </td>
        <td>
          <TimeTable selected={selected} id={item.id} />
        </td>
        <td>
          <Link
            to={`/lec-hall-allocation/booking/${
              selected == 0 ? "Lecture-halls" : "Labs" //chnage to selected if needed
            }/${item.id}`}
          >
            <button
              className="book-button book-button-table"
              style={{ height: "30px" }}
            >
              Book
            </button>
          </Link>
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
              {`${selected == 0 ? "Lecture Hall" : "Lab"} ${item.id}`}
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
                    <td style={hiddenTable}>{item.id}</td>
                    <td style={hiddenTable}>{item.capacity}</td>
                    <td
                      style={hiddenTable}
                    >{`Building- ${item.buildingNumber}, Floor- ${item.floorNumber}`}</td>
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
