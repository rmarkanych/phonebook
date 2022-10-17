import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Nav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 20px;
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
    color: white;
    background-color: green;
  }
  :focus-visible:not(.active),
  :hover:not(.active) {
    color: white;
    background-color: green;
    transform: scale(1.05);
  }
`;
