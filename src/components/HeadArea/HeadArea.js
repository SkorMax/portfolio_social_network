import { NavLink } from 'react-router-dom';
import styles from './HeadArea.module.css';

function HeadArea(props) {
  return (
    <div className={styles.container}>
      <div className={styles.logoArea}>
        <img src="/images/logonav.png" alt="logo" />
      </div>
      <div className={styles.loginBLock}>
        {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </div>
  );
}

export default HeadArea;
