import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { useState } from "react";
import { ClassRoomResource } from "../Models";
import ResourceDetails from "./ResourceDetails";

type ResourceProps = {
  resourcesUsed: ClassRoomResource[];
};

export default function Resources(props: ResourceProps) {
  //Dialog box
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const resourceList = () => {
    if (props.resourcesUsed.length == 0) {
      return (
        <tbody>
          <tr>
            <td>No resources are in use.</td>
          </tr>
        </tbody>
      );
    }

    const items = props.resourcesUsed.map((i) => (
      <ResourceDetails
        key={i.resourceId}
        id={i.resourceId}
        quantity={i.quantity}
      />
    ));

    return <tbody>{items}</tbody>;
  };

  return (
    <>
      <button
        className="resource-button"
        onClick={() => {
          setOpen(true);
        }}
      >
        <span style={{ marginRight: "10px" }}>View</span>
        <i className="fa fa-angle-right" aria-hidden="true"></i>
      </button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <div className="popup">
          <DialogTitle
            className="page-title"
            style={{
              marginBottom: "20px",
              color: "#ff5c55",
              fontSize: "26px",
              fontWeight: "bold",
            }}
          >
            Resources In Use
          </DialogTitle>
          <DialogContent>
            <DialogContentText style={{ textAlign: "center" }}>
              <table className="details">
                <thead>
                  <tr>
                    <th>Item Name</th>
                    <th>Description</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                {resourceList()}
              </table>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <button className="OK-button" onClick={handleClose}>
              OK
            </button>
          </DialogActions>
        </div>
      </Dialog>
    </>
  );
}
