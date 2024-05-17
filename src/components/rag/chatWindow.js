import React from "react";
import iconMan from "../../assets/navigation/icon_man.png";
import styles from "./chatWindow.module.css";

const profileImageUrl = "https://via.placeholder.com/40"; // 여기에 실제 프로필 이미지 URL을 넣으세요

function ChatWindow({ messages }) {
  return (
    <div className={styles.chatWindow}>
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`${styles.chatMessageContainer} ${
            msg.fromUser
              ? styles.userMessageContainer
              : styles.responseMessageContainer
          }`}
        >
          {!msg.fromUser && (
            <img src={iconMan} alt="profile" className={styles.profileImage} />
          )}
          <div
            className={`${styles.chatMessage} ${
              msg.fromUser ? styles.userMessage : styles.responseMessage
            }`}
          >
            {msg.text}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatWindow;
