import React, { useState } from "react";
import Form from "../../components/cus/Form";
import axiosInstance from "../../lib/axios";

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
      options: ["상담", "A/S", "구매"],
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

  const handleSubmit = async (formData) => {
    setLoading(true);

    try {
      const response = await axiosInstance.post(
        "/api/v1/consult/global",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "X-CSRFToken":
              "7Llv9j54QO6VdKL9LibpXCX6GbOcPPKeBQCKUJuwWz5rSkkonXcYF0ZnpXjCUDa9",
            Authorization: `Bearer YOUR_AUTH_TOKEN`, // 실제 인증 토큰으로 변경 필요
          },
        }
      );

      setMessage("성공적으로 처리되었습니다.");
      console.log("서버로부터의 응답:", response.data);
    } catch (error) {
      setMessage("에러가 발생했습니다: " + error.message);
      console.error("요청 에러 발생:", error);
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(""), 5000);
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
