import React, { useState } from "react";
import styles from "./RagPage.module.css";
import ChatWindow from "../../components/rag/chatWindow";
import ChatInput from "../../components/rag/chatInput";
import Loading from "../../components/rag/loading";

const mockResponses = {
  hello: "Hi there! How can I help you today?",
  "how are you": "I'm just a bunch of code, but I'm here to help you!",
  "what is your name": "I'm your friendly chatbot.",
  default: "Sorry, I don't understand that. Can you ask something else?",
};

function RagPage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async (message) => {
    const newMessage = { text: message, fromUser: true };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setLoading(true);

    // Simulate API delay
    setTimeout(() => {
      const responseText =
        mockResponses[message.toLowerCase()] || mockResponses["default"];
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: responseText, fromUser: false },
      ]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className={styles.ragContainer}>
      <ChatWindow messages={messages} />
      {loading && <Loading />}
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}

export default RagPage;
