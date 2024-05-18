import React, { useState, useEffect } from "react";
import styles from "./RagPage.module.css";
import ChatWindow from "../../components/rag/chatWindow";
import ChatInput from "../../components/rag/chatInput";
import Loading from "../../components/rag/loading";

// 나중에 제거
import productMock from "../../mockdata/ProductMock.json";

const mockResponses = {
  default: "(RAG에서 나오는 대답값)",
};

const introductionMessages = [
  "안녕하세요! 저는 문의하신 제품 정보, 수리 등 고객님께서 궁금한 것에 관해 답변해줄 수 있어요! 편리하게 궁금한 점을 물어보세요!",
  "어떤 제품에 관해서 검색하려고 하시나요?", // 제품 정보 획득하기 위한 질문
];

function RagPage() {
  const [messages, setMessages] = useState([]); // 대화 메시지 상태
  const [loading, setLoading] = useState(false); // 로딩 상태
  const [isFirstQuestion, setIsFirstQuestion] = useState(true); // 첫 번째 질문 여부 상태
  const [productOptions, setProductOptions] = useState([]); // 제품 목록 드롭다운 옵션 상태

  useEffect(() => {
    // 초기 메시지 설정
    const introductionMessage = introductionMessages.map((message) => ({
      text: message,
      fromUser: false,
    }));
    setMessages(introductionMessage);

    // 제품 이름(부품 번호) 추출해서 드롭다운 메뉴 옵션으로 설정하는 부분
    const options = productMock.map((product) => ({
      value: product.fields.part_number,
      label: `${product.fields.name} (${product.fields.part_number})`,
    }));
    setProductOptions(options);
  }, []);

  const handleSendMessage = async (message, isProduct = false) => {
    console.log("보낸 메시지:", message);
    console.log("제품 관련 여부:", isProduct);

    const newMessage = { text: message, fromUser: true };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setLoading(true);

    try {
      // API 호출
      // const response = await fetch('/api/chat', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ message, isProduct }),
      // });
      // const data = await response.json();
      // const responseText = data.response || mockResponses["default"];

      const responseText = mockResponses["default"];

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: responseText, fromUser: false },
      ]);
    } catch (error) {
      console.error("API 호출 에러", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "API 호출 오류 발생", fromUser: false },
      ]);
    }

    setLoading(false);
    setIsFirstQuestion(false);
  };

  return (
    <div className={styles.ragContainer}>
      <ChatWindow messages={messages} />
      {loading && <Loading />}
      <ChatInput
        onSendMessage={handleSendMessage}
        isFirstQuestion={isFirstQuestion}
        productOptions={productOptions}
      />
    </div>
  );
}

export default RagPage;
