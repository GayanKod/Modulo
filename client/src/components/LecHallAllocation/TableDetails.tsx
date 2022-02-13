import { HallDetails, LabDetails } from "./Details";

interface Props {
  btn: string;
}

function TableDetails({ btn }: Props) {
  const lecHalls = HallDetails.map((item) => (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.capacity}</td>
      <td>{item.location}</td>
    </tr>
  ));
  const labs = LabDetails.map((item) => (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.capacity}</td>
      <td>{item.location}</td>
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
