import React, { useState } from "react";
import styles from "./chatInput.module.css";

function ChatInput({
  onSendMessage,
  isFirstQuestion,
  productOptions,
  onDropdownSelection,
  selectedProduct,
  setSelectedProduct,
}) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFirstQuestion) {
      if (selectedProduct) {
        onSendMessage(selectedProduct);
        setInput("");
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
          onChange={(e) => {
            onDropdownSelection(e.target.value);
            setSelectedProduct(e.target.value);
          }}
          className={styles.selectInput}
        >
          {productOptions.map((product, index) => (
            <option
              key={index}
              value={product.value}
              disabled={product.value === "divider" || product.disabled}
            >
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
