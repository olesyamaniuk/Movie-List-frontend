import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';

const NavigationClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <div className={css.container}>
      <NavLink to="/" className={css.navLink}>
      </NavLink>
      <nav className={css.nav}>
        <NavLink to="/" className={NavigationClass}>
          Home
        </NavLink>
        <NavLink to="/add-movie" className={NavigationClass}>
          Add Movie
        </NavLink>
      </nav>
    </div>
  );
}