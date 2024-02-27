import styles from './Header.module.css';
import Avatar from '../Profile/ProfileInfo/Avatar/Avatar';

function Header(props) {
  return (
    <header className={styles.header}>
      <img
        src="https://picsum.photos/id/11/5000/3333"
        alt="Inspiration photo"
      />
      <Avatar profilePhoto={props.profilePhoto} />
    </header>
  );
}

export default Header;
