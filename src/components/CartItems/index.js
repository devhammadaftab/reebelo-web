import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RemoveIcon from "@mui/icons-material/Remove";
import { Divider, Snackbar } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import React, { useContext } from "react";
import { globalContext } from "../../context";
import Navbar from "../Header";
import PlaceOrderModal from "../Modal";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const Amount = {
  width: "100%",
  borderRadius: "10px",
  border: "1px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const qty = {
  width: "30px",
  height: "30px",
  borderRadius: "10px",
  border: "1px solid teal",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0px 5px",
};

export default function CartItems() {
  const { cart, removeFromCart, addToCart, deleteProductFromCart } =
    useContext(globalContext);

  return (
    <>
      <Navbar />
      {cart?.length == 0 ? (
        <>
          <Divider
            sx={{
              marginTop: "20px",
            }}
          />
          <Typography
            variant="h6"
            color="red"
            align="center"
            sx={{ marginTop: "15px" }}
          >
            Cart is empty.
          </Typography>
        </>
      ) : (
        <TableContainer
          component={Paper}
          sx={{ margin: "15px auto", width: "95%" }}
        >
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Image</StyledTableCell>
                <StyledTableCell align="right">Product</StyledTableCell>
                <StyledTableCell align="center">Quantity</StyledTableCell>
                <StyledTableCell align="right">Price</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart?.map((item) => (
                <StyledTableRow key={item._id}>
                  <StyledTableCell component="th" scope="row">
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: "80px", height: "80px" }}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="right">{item.title}</StyledTableCell>
                  <StyledTableCell align="right">
                    <Box sx={Amount}>
                      <RemoveIcon
                        sx={{ cursor: "pointer" }}
                        onClick={() => removeFromCart(item)}
                      />
                      <span sx={qty}>{item.qty}</span>
                      <AddIcon
                        sx={{ cursor: "pointer" }}
                        onClick={() => addToCart(item)}
                      />
                    </Box>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    ${item.price * item.qty}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <DeleteForeverIcon
                      sx={{ cursor: "pointer", fontSize: "25px" }}
                      onClick={() => deleteProductFromCart(item)}
                    />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
          <PlaceOrderModal />
        </TableContainer>
      )}
    </>
  );
}
