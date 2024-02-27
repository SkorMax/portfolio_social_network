import styles from './Profile.module.css';
import PostsContainer from './Posts/PostsContainer';
import Aside from '../Aside/Aside';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
  return (
    <>
      <main>
        <ProfileInfo profile={props.profile} />
        <PostsContainer />
      </main>
      <Aside />
    </>
  );
}

export default Profile;
