import { NavLink } from 'react-router-dom';
import styles from '../Messanger.module.css';

const DialogItem = ({ id, name }) => {
  let path = '/messanger/' + id;

  return (
    <div className={styles.dialog}>
      <NavLink to={path}>{name}</NavLink>
    </div>
  );
};

export default DialogItem;
