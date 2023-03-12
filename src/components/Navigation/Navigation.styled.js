import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 89%;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid white;
`;

export const NavItem = styled(NavLink)`
display: flex;
align-items: center;
  padding: 5px 10px;
  font-size: 20px;
  text-decoration: none;
  background-color: transparent;
  border-radius: 7px;
  color: white;
  height: 15px;
  font-family: 'Caveat Brush';
  border: 1px solid white;
  &.active {
    color: black;
    background-color: white;
  }
  :focus-visible:not(.active),
  :hover:not(.active) {
    color: black;
    background-color: white;
  }
`;
