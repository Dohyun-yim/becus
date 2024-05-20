import React, { useState, useEffect } from "react";
import ChatWindow from "../../components/rag/chatWindow";
import ChatInput from "../../components/rag/chatInput";
import Loading from "../../components/rag/loading";
import styles from "./RagPage.module.css";

//여기는 나중에 db랑 연결해서 제품 정보 불러와야 함 (이후 삭제!)
import productMock from "../../mockdata/ProductMock.json";

//API 응답이 없는 경우 나타나는 응답 default 값
const mockResponses = {
  default: "(RAG에서 나오는 대답값)",
};

const introductionMessages = [
  "안녕하세요! 저는 문의하신 제품 정보, 수리 등 고객님께서 궁금한 것에 관해 답변해줄 수 있어요! 편리하게 궁금한 점을 물어보세요!",
  "어떤 제품에 관해서 검색하려고 하시나요? (특정 제품이 없다면, 전체 상품을 선택해주세요!)",
];

function RagPage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isFirstQuestion, setIsFirstQuestion] = useState(true);
  const [productOptions, setProductOptions] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const loggedIn = await fetchLoginStatus();
      setIsLoggedIn(loggedIn); // 로그인 상태 확인
    };

    checkLoginStatus();
    resetPage();
  }, []);

  // 로그인 되어 있는지 확인을 위해서 api 호출해야 하는 란^^
  const fetchLoginStatus = async () => {
    return true; // 실제 로그인 상태 확인 로직
  };

  const resetPage = () => {
    const introductionMessage = introductionMessages.map((message) => ({
      text: message,
      fromUser: false,
    }));
    setMessages(introductionMessage);

    // 드롭다운 옵션 설정
    const initialOptions = [
      { value: "", label: "제품을 선택하세요!", disabled: true },
    ];
    // 로그인 했을 경우, 사용자 소유 상품 옵션 추가!
    if (isLoggedIn) {
      initialOptions.push({ value: "user_owned", label: "사용자 소유 상품" });
    }

    // 선택 안하는 경우도 있어야 하기에 전체 상품 옵션 추가!
    initialOptions.push({ value: "none", label: "전체 상품" });

    // 제품 데이터 (연결해야 하는 부분)
    const options = productMock.map((product) => ({
      value: product.fields.part_number,
      label: `${product.fields.name} (${product.fields.part_number})`,
    }));

    // 드롭다운 옵션 설정
    setProductOptions([
      ...initialOptions,
      { value: "divider", label: "-------------------" },
      ...options,
    ]);
    setLoading(false);
    setIsFirstQuestion(true);
  };

  const handleDropdownSelection = (selectedValue) => {
    setSelectedProduct(selectedValue);
    const selectedProductLabel = productOptions.find(
      (product) => product.value === selectedValue
    ).label;
    const responseText = `${selectedProductLabel}을 선택하셨습니다. 질문을 보내주세요!`;
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: responseText, fromUser: false },
    ]);
    setIsFirstQuestion(false); //첫번째 질문 했는지 여부 업데이트 하기.
    console.log("드롭다운 제품 선택 값:", selectedValue);
  };

  const handleSendMessage = async (message) => {
    console.log("보낸 메시지:", message);
    console.log("선택된 제품:", selectedProduct); //새로고침 전까지 계속 제품 보유.
    const newMessage = { text: message, fromUser: true };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setLoading(true);

    try {
      // API 호출 시 선택된 제품과 함께 보냄
      // const response = await fetch('/api/chat', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ message, selectedProduct }),
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
  };

  return (
    <div className={styles.ragContainer}>
      <div className={styles.refreshContainer}>
        <button onClick={resetPage} className={styles.refreshButton}>
          새로고침
        </button>
      </div>
      <ChatWindow messages={messages} />
      {loading && <Loading />}
      <ChatInput
        onSendMessage={handleSendMessage}
        isFirstQuestion={isFirstQuestion}
        productOptions={productOptions}
        onDropdownSelection={handleDropdownSelection}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
    </div>
  );
}

export default RagPage;
