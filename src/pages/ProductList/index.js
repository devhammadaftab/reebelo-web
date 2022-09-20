import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "styled-components";
import Navbar from "../../components/Header";
import { mobile } from "../../responsive";
import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { globalContext } from "../../context";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  margin-top: 60px;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 60%;
  object-fit: contain;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  margin-top: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const ProductsInfo = ({ data }) => {
  const { addToCart, cart } = useContext(globalContext);

  const [qty, setQty] = useState(1);

  const { id } = useParams();
  const product = data?.find((item) => {
    return parseInt(item._id) == parseInt(id);
  });

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={product?.image} alt="product" />
        </ImgContainer>
        <InfoContainer>
          <Title>{product?.title}</Title>
          <Desc>{product?.slug}</Desc>
          <Price>$ {product.price}</Price>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon
                onClick={() => {
                  if (qty > 1) {
                    setQty(qty - 1);
                  }
                }}
              />
              <Amount>{qty}</Amount>
              <AddIcon onClick={() => setQty(qty + 1)} />
            </AmountContainer>
          </AddContainer>
          <Button onClick={() => addToCart(product, qty)}>ADD TO CART</Button>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default ProductsInfo;
