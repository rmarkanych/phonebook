import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Nav = styled.nav`
  padding-left: 0;
  padding-right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 20px;
  top: 0;
  left: 0;
  //position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavItem = styled(NavLink)`
  padding: 5px 15px;
  font-size: 30px;
  text-decoration: none;
  background-color: white;
  border-radius: 7px;
  color: gray;
  font-family: 'Caveat Brush';
  border: 1px solid green;
  &.active {
    color: black;
    background-color: green;
  }
  :focus-visible:not(.active),
  :hover:not(.active) {
    color: gray;
    color: black;
    transform: scale(1.05);
  }
`;
