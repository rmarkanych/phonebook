import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <>
      <nav className={s.nav}>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/contacts"> Phonebook </NavLink>
        <NavLink to="/register"> Registration </NavLink>
        <NavLink to="/login"> LogIn </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
