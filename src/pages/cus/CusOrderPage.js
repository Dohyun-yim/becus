import React from "react";
import Form from "../../components/cus/Form";

function OrderPage() {
  const formFields = [
    {
      id: "o_name",
      name: "o_name",
      label: "이름 및 업체명",
      type: "text",
      required: true,
    },
    {
      id: "o_phone",
      name: "o_phone",
      label: "연락처",
      type: "text",
      required: true,
    },
    {
      id: "o_email",
      name: "o_email",
      label: "이메일",
      type: "email",
      required: true,
    },
    {
      id: "o_product_id",
      name: "o_product_id",
      label: "상품 품번",
      type: "text",
      required: true,
    },
    {
      id: "o_amount",
      name: "o_amount",
      label: "상품 수",
      type: "number",
      required: true,
    },
    {
      id: "o_address",
      name: "o_address",
      label: "주소",
      type: "text",
      required: true,
    },
    {
      id: "o_content",
      name: "o_content",
      label: "기타 요청사항",
      type: "textarea",
      required: false,
    },
  ];

  const handleSubmit = async (formData) => {
    console.log(formData);
    try {
      const response = await fetch("http://34.64.53.159:8000/api/v1/order/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-CSRFToken":
            "VM8ze4ZAqNElg4sdSIu7M7oAB0CojeF0jLqMZT04Cu9i2gnS4jitO7uZyVd0vAyR",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        console.log("서버로부터의 응답:", jsonResponse);
      } else {
        throw new Error("서버 응답 문제 발생");
      }
    } catch (error) {
      console.error("요청 에러 발생", error);
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      title="견적 요청서 작성"
      fields={formFields}
    />
  );
}

export default OrderPage;
