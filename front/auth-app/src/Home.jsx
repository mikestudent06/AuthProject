import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeContainer = styled.div`
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 24px;
`;

const Content = styled.p`
  font-size: 18px;
  margin: 20px 0;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
`;

const NavButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  margin: 10px 0;

  &:hover {
    background-color: #0056b3;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Heading>Welcome to the Home page</Heading>
      <Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus
        feugiat, fermentum odio et, congue odio.
      </Content>
      <NavBar>
        <NavButton to="/auth/login">Login</NavButton>
        <NavButton to="/auth/register">Register</NavButton>
        <NavButton to="/">Home</NavButton>
      </NavBar>
    </HomeContainer>
  );
};

export default Home;
