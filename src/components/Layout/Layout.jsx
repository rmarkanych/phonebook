import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import s from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <nav className={s.nav}>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/phonebook"> Phonebook </NavLink>
        <NavLink to="/register"> Registration </NavLink>
        <NavLink to="/login"> LogIn </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
