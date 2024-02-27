import Preloader from '../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';

function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <>
      <div className={styles.profileArea}>
        <h2>About me</h2>
      </div>
      <div>
        <img src={props.profile.photos.large} />
      </div>
    </>
  );
}

export default ProfileInfo;
