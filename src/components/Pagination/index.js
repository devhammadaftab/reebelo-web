import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import styled from "styled-components";

const ProductPagination = () => {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const Center = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
  `;

  return (
    <Stack spacing={2}>
      <Center>
        <Pagination count={10} page={page} onChange={handleChange} />
      </Center>
    </Stack>
  );
};
export default ProductPagination;
