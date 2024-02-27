import React from 'react';
import styles from './Messanger.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

function Messanger({ changeTextMessage, sendMessage, messangerPage }) {
  let dialogsComponents = messangerPage.dialogsData.map((dialog) => {
    return <DialogItem id={dialog.id} key={dialog.id} name={dialog.name} />;
  });
  let messagesComponents = messangerPage.messagesData.map((message) => {
    return <MessageItem message={message.message} key={message.id} />;
  });
  let enteringMessage = messangerPage.enteringTextMessage;

  let onSendMessageClick = () => {
    sendMessage();
  };

  let onNewMessageChange = (e) => {
    let text = e.target.value;
    changeTextMessage(text);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.messanger}>
      <div className={styles.dialogs}>{dialogsComponents}</div>
      <div className={styles.messages}>{messagesComponents}</div>
      <form className={styles.form2} onSubmit={onSubmitHandler}>
        <textarea
          value={enteringMessage}
          onChange={onNewMessageChange}
          placeholder="Write a message..."
          className={styles.textarea2}
        ></textarea>
        <button onClick={onSendMessageClick} className={styles.button2}>
          Send
        </button>
      </form>
    </div>
  );
}

export default Messanger;
