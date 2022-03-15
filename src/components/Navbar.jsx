import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
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

const Right = styled.div`

  flex: 1;
  display: flex;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const Language = styled.div`
  font-size: 18px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  margin-left: 10px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Logo = styled.h1`
 ${mobile({ fontSize: "24px" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 16px;
  font-weight: 600;
  font-size: 15px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>English</Language>
          <SearchContainer>
            <Input></Input>
            <Search style={{color:'gray',fontSize:18}} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>TFK</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Login</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
