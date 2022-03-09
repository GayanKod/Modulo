import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

function Schedule() {
  return (
    <table>
      <tbody>
        <tr>
          <td>08:00</td>
          <td>09:00</td>
          <td>10:00</td>
          <td>11:00</td>
          <td>12:00</td>
          <td>13:00</td>
          <td>14:00</td>
          <td>15:00</td>
          <td>16:00</td>
          <td>17:00</td>
          <td>18:00</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}

export default function TimeTable() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button className="info-button" onClick={() => setOpen(true)}>
        <i className="fa fa-info-circle"></i>
      </button>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        sx={{ width: "100vw", margin: "auto" }}
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle></DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Schedule />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Disagree</Button> */}
          {/* <Button onClick={handleClose} autoFocus></Button> */}
          <button>Book</button>
        </DialogActions>
      </Dialog>
    </>
  );
}
