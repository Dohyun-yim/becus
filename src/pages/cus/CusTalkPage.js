import React, { useState } from "react";
import Form from "../../components/cus/Form";

function TalkPage() {
  const formFields = [
    {
      id: "gc_name",
      name: "gc_name",
      label: "이름 및 업체명",
      type: "text",
      required: true,
    },
    {
      id: "gc_phone",
      name: "gc_phone",
      label: "연락처",
      type: "text",
      required: true,
    },
    {
      id: "gc_email",
      name: "gc_email",
      label: "이메일",
      type: "email",
      required: true,
    },
    {
      id: "gc_type",
      name: "gc_type",
      label: "문의유형",
      type: "select",
      required: true,
      options: ["구매", "A/S", "상담"],
    },
    {
      id: "gc_product_id",
      name: "gc_product_id",
      label: "문의상품",
      type: "text",
      required: false,
    },
    {
      id: "gc_content",
      name: "gc_content",
      label: "기타 요청사항",
      type: "textarea",
      required: false,
    },
  ];

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const data = formFields.reduce((acc, field) => {
      acc[field.name] = event.target[field.name].value;
      return acc;
    }, {});

    try {
      const response = await fetch(
        "http://34.64.53.159:8000/api/v1/consult/global",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "X-CSRFToken":
              "VM8ze4ZAqNElg4sdSIu7M7oAB0CojeF0jLqMZT04Cu9i2gnS4jitO7uZyVd0vAyR",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const jsonResponse = await response.json();
      setMessage("성공적으로 처리되었습니다.");
      console.log("서버로부터의 응답:", jsonResponse);
    } catch (error) {
      setMessage("에러가 발생했습니다: " + error.message);
      console.error("요청 에러 발생:", error);
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(""), 5000); // 5초 후 메시지 초기화
    }
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {message && <p>{message}</p>}
      <Form
        title="상담 문의서 작성"
        fields={formFields}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default TalkPage;
