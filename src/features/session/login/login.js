import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import Form from "./loginForm";

export default function Login({ open, handleClickOpen }) {
  return (
    <Dialog open={open} onClose={handleClickOpen}>
      <div style={{ width:"450px" }}>
        <DialogTitle >Login</DialogTitle>

        <DialogContent>
          <Form />
        </DialogContent>
      </div>
    </Dialog>
  );
}
