import styles from './Post.module.css';

function Post({ message, likesCount }) {
  return (
    <article>
      <h3>Name poster</h3>
      <p>{message}</p>
      <span>like{likesCount}</span>
    </article>
  );
}

export default Post;
