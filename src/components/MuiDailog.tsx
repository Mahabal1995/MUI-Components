import { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

const MuiDailog = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Open Dailog
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description">
        <DialogTitle id="dialog-title">Are you sure ?</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            Do You really want to Submit.....?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpen(false);
            }}
            color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              setOpen(false);
            }}
            color="primary"
            autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MuiDailog;
