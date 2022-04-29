import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MenuItem, MenuList } from "@mui/material";

const StyledItem = styled(MenuItem)`
  display: inline-block;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 1.3rem;
  /* color: blue; */
  padding-right: 1rem;
  &.active {
    color: black;
  }
`;

export const Navigation = () => {
  return (
    <nav>
      <MenuList align="center">
        <StyledItem>
          <Link to="/">Home</Link>
        </StyledItem>
        <StyledItem>
          <Link to="/registration">Registration</Link>
        </StyledItem>
        <StyledItem>
          <Link to="/menu">Menu</Link>
        </StyledItem>
        <StyledItem>
          <Link to="/admin">Admin</Link>
        </StyledItem>
      </MenuList>
    </nav>
  );
};
