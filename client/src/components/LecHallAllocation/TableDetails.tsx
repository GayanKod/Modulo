import { HallDetails, LabDetails } from "./Details";

interface Props {
  btn: string;
}

// const infoIcon = () => (
//   <a>
//     <i className="fa fa-info-circle"></i>
//   </a>
// );

function TableDetails({ btn }: Props) {
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
      </td>
    </tr>
  ));

  switch (btn) {
    case "lec":
      return <>{lecHalls}</>;

    case "lab":
      return <>{labs}</>;
    default:
      return <></>;
  }
}

export default TableDetails;
