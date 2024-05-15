import React from "react";
import styles from "./chatWindow.module.css";

function ChatWindow({ messages }) {
  return (
    <div className={styles.chatWindow}>
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`${styles.chatMessage} ${
            msg.fromUser ? styles.userMessage : styles.responseMessage
          }`}
        >
          {msg.text}
        </div>
      ))}
    </div>
  );
}

export default ChatWindow;
