import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  const activityCheck = (el) => (el.isActive ? styles.active : styles.a);

  return (
    <nav>
      <ul className={styles.listStyle}>
        <li>
          <NavLink to="/profile" className={activityCheck}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/Friends" className={activityCheck}>
            Friends
          </NavLink>
        </li>
        <li>
          <NavLink to="/Messanger" className={activityCheck}>
            Messanger
          </NavLink>
        </li>
        <li>
          <NavLink to="/News" className={activityCheck}>
            News
          </NavLink>
        </li>
        <li>
          <NavLink to="/Users" className={activityCheck}>
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to="/Music" className={activityCheck}>
            Music
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
