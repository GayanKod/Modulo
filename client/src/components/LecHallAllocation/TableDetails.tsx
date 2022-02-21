import { HallDetails, LabDetails } from "./Details";

interface Props {
  selected: string;
}

function TableDetails({ selected }: Props) {
  const lecHalls = HallDetails.map((item) => (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.capacity}</td>
      <td>{item.location}</td>
      <td>
        <a href="#">
          <i className="fa fa-info-circle"></i>
        </a>
        <button>Book</button>
      </td>
    </tr>
  ));
  const labs = LabDetails.map((item) => (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.capacity}</td>
      <td>{item.location}</td>
      <td>
        <a href="#">
          <i className="fa fa-info-circle"></i>
        </a>
        <button>Book</button>
      </td>
    </tr>
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

export default TableDetails;
