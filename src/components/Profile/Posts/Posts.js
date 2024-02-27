import React from 'react';
import styles from './Posts.module.css';
import Post from './Post/Post';

function Posts({ changeAreaText, addNewPost, postsData, newTextArea }) {
  let postsElements = postsData.map((post) => {
    return (
      <Post
        postId={post.postId}
        message={post.message}
        likesCount={post.likesCount}
        key={post.id}
      />
    );
  });

  const onAddNewPost = () => {
    addNewPost();
  };

  const newPostElement = React.createRef();

  let onPostChange = () => {
    let text = newPostElement.current.value;
    changeAreaText(text);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <section className={styles.posts}>
      <form onSubmit={onSubmitHandler}>
        <textarea
          placeholder="Send me a cool post :)"
          onChange={onPostChange}
          ref={newPostElement}
          value={newTextArea}
          maxLength={2000}
        />
        <button onClick={onAddNewPost}>Send</button>
      </form>
      {postsElements}
    </section>
  );
}

export default Posts;
