import { Snackbar } from "@mui/material";
import React from "react";
import Navbar from "../../components/Header";
import Products from "../../components/ProductItem";
const Home = ({ data, loadMore, total }) => {
  return (
    <>
      <Navbar />
      <Products data={data} loadMore={loadMore} total={total} />
    </>
  );
};

export default Home;
