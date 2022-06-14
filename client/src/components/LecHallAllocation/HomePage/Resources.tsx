// import { Typography } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { useState } from "react";
import { Link } from "react-router-dom";
import { ClassRooms } from "../Details";
import ResourceItem from "./ResourceDetails";
import ResourceDetails from "./ResourceDetails";

type ResourceProps = {
  id: number;
};

export default function Resources(props: ResourceProps) {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  if (props.id) {
    return (
      <>
        <button className="resource-button" onClick={() => setOpen(true)}>
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
              Resources In Use - Lab {props.id}
            </DialogTitle>
            <DialogContent>
              <DialogContentText style={{ textAlign: "center" }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Item Name</TableCell>
                      <TableCell>Quantity</TableCell>
                    </TableRow>
                  </TableHead>
                  <ResourceDetails id={props.id} />
                </Table>
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
  } else return <></>;
}
