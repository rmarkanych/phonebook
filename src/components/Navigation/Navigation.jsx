//import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Nav, NavItem } from './Navigation.styled';

const Navigation = () => {
  const isAuth = useSelector(state => state.auth.isAuth);
  return (
    <>
      <Nav>
        {isAuth ? (
          <>
            <NavItem to="/" end>
              Home
            </NavItem>
            <NavItem to="/contacts"> Phonebook </NavItem>
          </>
        ) : (
          <>
            <NavItem to="/" end>
              Home
            </NavItem>
            <NavItem to="/register"> Registration </NavItem>
            <NavItem to="/login"> Log In </NavItem>
          </>
        )}
      </Nav>
      <Outlet />
    </>
  );
};

export default Navigation;
