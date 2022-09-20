import styled from "styled-components";
import Button from "@mui/material/Button";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ data, loadMore, total }) => {
  return (
    <>
      <Container>
        {data?.map((item) => (
          <Product item={item} key={item._id} />
        ))}
      </Container>
      <Button
        style={{
          display: "flex",
          margin: "0 auto",
        }}
        onClick={loadMore}
        disabled={data.length >= total}
        variant="contained"
      >
        Load More
      </Button>
    </>
  );
};

export default Products;
