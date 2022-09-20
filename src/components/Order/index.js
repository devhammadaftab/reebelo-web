import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { globalContext } from "../../context";

const Container = {
  display: "flex",
  justifiyContent: "center",
  alignItems: "center",
  margin: "auto",
  width: "90%",
  paddingLeft: "120px",
};

const initState = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address: {
    address: "",
    city: "",
    zipCode: "",
  },
};
const Order = ({ setSuccess, setOpen }) => {
  const { cart, setCart } = useContext(globalContext);
  const [orderDetails, setOrderDetails] = React.useState(initState);

  const handleAddToCart = (item) => {
    axios
      .post(`${process.env.REACT_APP_BASE_API_URL}/order/place-order`, item)
      .then((response) => {
        setSuccess(true);
        setCart([]);
        setOrderDetails(initState);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("tserss");

    let cartData = [];
    cart.forEach(({ _id, qty }) => {
      cartData.push({
        productId: _id,
        quantity: qty,
      });
    });
    const item = {
      ...orderDetails,
      cart: cartData,
    };
    handleAddToCart(item);
  };

  return (
    <>
      <Typography
        variant="h6"
        align="center"
        sx={{ textDecoration: "underline", marginTop: "30px" }}
      >
        User Detail
      </Typography>
      <Box sx={Container}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
            margin: "auto ",
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Box>
            <TextField
              required
              id="outlined-required"
              label="First Name"
              name="firstName"
              value={orderDetails.firstName}
              style={{ width: "40%" }}
              onChange={(e) =>
                setOrderDetails({ ...orderDetails, firstName: e.target.value })
              }
            />
            <TextField
              required
              id="outlined-required"
              label="Last Name"
              name="lastName"
              style={{ width: "40%" }}
              onChange={(e) =>
                setOrderDetails({ ...orderDetails, lastName: e.target.value })
              }
            />
            <TextField
              required
              id="outlined-required"
              label="Email"
              name="email"
              style={{ width: "40%" }}
              onChange={(e) =>
                setOrderDetails({ ...orderDetails, email: e.target.value })
              }
            />
            <TextField
              required
              type="number"
              id="outlined-disabled"
              label="Number"
              name="contact"
              onChange={(e) =>
                setOrderDetails({ ...orderDetails, contact: e.target.value })
              }
              style={{ width: "40%" }}
            />{" "}
            <TextField
              required
              type="text"
              id="outlined-disabled"
              label="City"
              name="city"
              onChange={(e) =>
                setOrderDetails({
                  ...orderDetails,
                  address: { ...orderDetails.address, city: e.target.value },
                })
              }
              style={{ width: "40%" }}
            />
            <TextField
              required
              type="number"
              id="outlined-disabled"
              label="Zip Code"
              name="zipCode"
              onChange={(e) =>
                setOrderDetails({
                  ...orderDetails,
                  address: { ...orderDetails.address, zipCode: e.target.value },
                })
              }
              style={{ width: "40%" }}
            />
            <TextField
              required
              type="text"
              id="outlined-disabled"
              label="Address"
              name="address"
              onChange={(e) =>
                setOrderDetails({
                  ...orderDetails,
                  address: { ...orderDetails.address, address: e.target.value },
                })
              }
              style={{ width: "82%" }}
            />
          </Box>
          <Button variant="contained" sx={{ marginLeft: "74%" }} type="submit">
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
};
export default Order;
