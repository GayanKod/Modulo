import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { useState } from "react";

type ConfirmationProps = {
  added: boolean;
};

function Confirmation(props: ConfirmationProps) {
  const [open, setOpen] = useState(props.added);
  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <>
      <button
        className="resource-button"
        onClick={() => {
          setOpen(open);
        }}
      >
        <span style={{ marginRight: "10px" }}>View</span>
        <i className="fa fa-angle-right" aria-hidden="true"></i>
      </button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <div className="popup">
          <DialogContent>
            <DialogContentText style={{ textAlign: "center" }}>
              Your booking was successful!
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

export default Confirmation;
