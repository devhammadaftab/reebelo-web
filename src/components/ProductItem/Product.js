import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import styled from "styled-components";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { globalContext } from "../../context";
import { useContext } from "react";
// import { popularProducts } from "../../API/data";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
  min-width: 250px;
`;

const Icon = styled.div`
  width: 70px;
  height: 60px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  const { addToCart } = useContext(globalContext);

  return (
    <Container>
      <Circle />
      <Image src={item.image} />
      <Info>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <VisibilityIcon style={{ color: "black" }} />
          </Link>
          <ShoppingCartIcon
            sx={{ marginLeft: "10px" }}
            onClick={() => addToCart(item)}
          />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
