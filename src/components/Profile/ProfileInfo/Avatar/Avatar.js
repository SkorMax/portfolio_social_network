import styles from './Avatar.module.css';
import Preloader from '../../../common/Preloader/Preloader';

function Avatar(props) {
  if (!props.profilePhoto) {
    return <Preloader />;
  }

  return (
    <div className={styles.avatar}>
      {/* <img src="/images/IMG_avatar.jpg" alt="avatar"></img> */}
      <img src={props.profilePhoto.photos.large} alt="avatar"></img>
    </div>
  );
}

export default Avatar;
