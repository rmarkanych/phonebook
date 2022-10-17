//import { NavLink } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';
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
            <UserMenu />
          </>
        ) : (
          <>
            <div style={{ display: 'flex', gap: '20px' }}>
              <NavItem to="/" end>
                Home
              </NavItem>
            </div>
            <div style={{ display: 'flex', gap: '20px' }}>
              <NavItem to="/register"> Registration </NavItem>
              <NavItem to="/login"> Log In </NavItem>
            </div>
          </>
        )}
      </Nav>
      <Outlet />
    </>
  );
};

export default Navigation;
