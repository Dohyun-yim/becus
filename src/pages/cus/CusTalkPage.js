import React, { useState } from "react";
import Form from "../../components/cus/Form";
import axiosInstance from "../../lib/axios";

// getCookie 함수 정의
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";").map((c) => c.trim());
    for (let cookie of cookies) {
      if (cookie.startsWith(name + "=")) {
        cookieValue = decodeURIComponent(cookie.slice(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

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
      label: "연락처 (010-xxxx-xxxx)",
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
      options: ["상담", "AS", "구매"],
    },
    {
      id: "gc_product",
      name: "gc_product",
      label: "문의상품",
      type: "text",
      required: false,
    },
    {
      id: "gc_content",
      name: "gc_content",
      label: "기타 요청사항",
      type: "textarea",
      required: true,
    },
  ];

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (formData) => {
    setLoading(true);

    const { gc_name, gc_email, gc_phone, gc_content, gc_product } = formData;

    const postData = {
      gc_name,
      gc_email,
      gc_phone,
      gc_content,
      gc_product,
    };

    try {
      const response = await axiosInstance.post(
        "/api/v1/consult/global",
        postData,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
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
