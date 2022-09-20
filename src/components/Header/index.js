import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React, { useContext } from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { Link } from "react-router-dom";
import { globalContext } from "../../context";
import { Divider } from "@mui/material";
const Container = styled.div`
  height: 60px;
  background-color: lightblue ${mobile({ height: "50px" })};
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-right: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const { cart } = useContext(globalContext);

  return (
    <Container>
      <Wrapper>
        <Left></Left>
        <Center>
          <Logo>
            <Link to="/">
              <img
                src="https://cdn.shopify.com/s/files/1/0423/2750/7093/files/LOGO.svg?v=1629354741"
                alt="logo"
              />
            </Link>
          </Logo>
        </Center>
        <Right>
          <MenuItem>
            <Badge
              badgeContent={cart?.length}
              color="primary"
              style={{ marginLeft: "5px" }}
            >
              <Link to="/cart-item">
                <ShoppingCartIcon />
              </Link>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
