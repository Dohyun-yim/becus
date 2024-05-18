import React, { useState } from "react";
import styles from "./chatInput.module.css";

function ChatInput({ onSendMessage, isFirstQuestion, productOptions }) {
  const [input, setInput] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFirstQuestion) {
      if (selectedProduct) {
        onSendMessage(selectedProduct, true); // isProduct를 true로 설정
        setSelectedProduct("");
      }
    } else {
      if (input.trim()) {
        onSendMessage(input, false); // isProduct를 false로 설정
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
            제품을 선택하세요...
          </option>
          {productOptions.map((product, index) => (
            <option key={index} value={product.value}>
              {product.label}
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
        전송
      </button>
    </form>
  );
}

export default ChatInput;
