import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TimePicker } from "@mui/x-date-pickers";
import moment from "moment";
import { nanoid } from "nanoid";

export default function FormDialog({
  open,
  handleClose,
  onEventCreate = () => {},
  data,
}) {
  const [formData, setFormData] = React.useState({
    start: data.date || null,
    end: data ? moment(data.date).add(1, "h") : null,
  });
  React.useEffect(() => {
    setFormData({
      ...formData,
      start: data.date || null,
      end: data.date ? moment(data.date).add(1, "h") : null,
    });
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const event = {
      eventId: nanoid(),
      start: moment(formData.start).format(),
      end: moment(formData.end).format(),
      admin_id: data.resource.admin_id,
    };
    onEventCreate(event), handleClose();
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            fullWidth
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />

          <TimePicker
            label="Start"
            value={formData.start}
            onChange={(value) => setFormData({ ...formData, start: value })}
          />
          <TimePicker
            label="End"
            value={formData.end}
            onChange={(value) => setFormData({ ...formData, end: value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
