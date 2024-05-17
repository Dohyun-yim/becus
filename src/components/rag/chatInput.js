import React, { useState } from "react";
import styles from "./chatInput.module.css";

const productOptions = ["Product 1", "Product 2", "Product 3"];

function ChatInput({ onSendMessage, isFirstQuestion }) {
  const [input, setInput] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFirstQuestion) {
      if (selectedProduct) {
        onSendMessage(selectedProduct);
        setSelectedProduct("");
      }
    } else {
      if (input.trim()) {
        onSendMessage(input);
        setInput("");
      }
    }
  };

  return (
    <form className={styles.chatInput} onSubmit={handleSubmit}>
      {isFirstQuestion ? (
        <select
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
          className={styles.selectInput}
        >
          <option value="" disabled>
            Select a product...
          </option>
          {productOptions.map((product, index) => (
            <option key={index} value={product}>
              {product}
            </option>
          ))}
        </select>
      ) : (
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="궁금한 점을 물어봐주세요!"
          className={styles.textInput}
        />
      )}
      <button
        type="submit"
        disabled={isFirstQuestion ? !selectedProduct : !input.trim()}
      >
        SEND
      </button>
    </form>
  );
}

export default ChatInput;
