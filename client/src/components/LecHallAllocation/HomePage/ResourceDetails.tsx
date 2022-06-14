import { Tab, TableBody, TableCell, TableRow } from "@mui/material";
import { ClassRooms } from "../Details";
import { Item } from "../Models";

type ResourceProps = {
  id: number;
};

function ResourceDetails(props: ResourceProps) {
  //WRONG!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // const isLab = (c: number) => ClassRooms[c].classRoomType == 1;

  // const resourceItems = ClassRooms[props.id].resources.map((r) => (
  //   <TableRow>
  //     <TableCell>{props.id}</TableCell>

  //     <TableCell>{r.ResourceName}</TableCell>
  //     <TableCell>{r.Quantity}</TableCell>
  //   </TableRow>
  // ));

  // // const item = ClassRooms[props.id].resources.map((item) => (
  // //   <TableRow key={item.Id}>
  // //     <TableCell>{item.ResourceName}</TableCell>
  // //     <TableCell>{item.Quantity}</TableCell>
  // //   </TableRow>
  // // ));
  // if (isLab(props.id))
  //   return <TableBody>{resourceItems}</TableBody>;
  // else return <></>;

  const classRoom = ClassRooms.find((i) => i.Id == props.id);

  if (!classRoom) {
    return <></>;
  }

  const resorceItems = classRoom.resources.map((item) => (
    <TableRow>
      <TableCell>{item.ResourceName}</TableCell>
      <TableCell>{item.Quantity}</TableCell>
    </TableRow>
  ));

  return <TableBody>{resorceItems}</TableBody>;
}

export default ResourceDetails;
