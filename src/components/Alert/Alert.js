import * as React from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

export default function Alerts({ open, message }) {
  console.log("🚀 ~ message", message);
  console.log("🚀 ~ open", open);
  // console.log();
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      message={message}
      color="success"
      // action={action}
    />
  );
}
