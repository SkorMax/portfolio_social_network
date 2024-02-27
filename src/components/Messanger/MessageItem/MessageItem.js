import styles from '../Messanger.module.css';

const MessageItem = ({ message }) => {
  return <div classname={styles.message}>{message}</div>;
};

export default MessageItem;
