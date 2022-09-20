import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { globalContext } from "../../context";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Order from "../Order";
import { Snackbar } from "@mui/material";
import Alerts from "../Alert/Alert";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  width: "80%",
  height: "70%",
  overflowY: "auto",
  p: 4,
};

export default function PlaceOrderModal() {
  const { cart } = useContext(globalContext);
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "end",
        }}
      >
        <Button
          onClick={handleOpen}
          sx={{
            margin: "5px",
          }}
          variant="contained"
          color="success"
        >
          Order Now
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ width: "100%" }}
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            align="center"
          >
            Your Order
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {cart?.length == 0 && (
              <h1 className="no-items product">No Items are add in Cart</h1>
            )}
          </Typography>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell align="left">Product</TableCell>
                  <TableCell align="left">Quantity</TableCell>
                  <TableCell align="left">Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map((item) => (
                  <TableRow
                    key={item._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: "80px", height: "80px" }}
                      />
                    </TableCell>
                    <TableCell align="left">{item.title}</TableCell>
                    <TableCell align="left">{item.qty}</TableCell>
                    <TableCell align="left">${item.price * item.qty}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Order setSuccess={setSuccess} setOpen={setOpen} />
        </Box>
      </Modal>

      <Alerts open={success} message="Order placed successfully." />
    </Box>
  );
}
