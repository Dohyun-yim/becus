import React from "react";
import Form from "../../components/cus/Form";

function OrderPage() {
  const formFields = [
    {
      id: "O_name",
      name: "O_name",
      label: "이름 및 업체명",
      type: "text",
      required: true,
    },
    {
      id: "O_phone",
      name: "O_phone",
      label: "연락처",
      type: "text",
      required: true,
    },
    {
      id: "O_email",
      name: "O_email",
      label: "이메일",
      type: "email",
      required: true,
    },
    {
      id: "O_product",
      name: "O_product",
      label: "상품명",
      type: "text",
      required: true,
    },
    {
      id: "O_amount",
      name: "O_amount",
      label: "상품 수",
      type: "number",
      required: true,
    },
    {
      id: "O_address",
      name: "O_address",
      label: "주소",
      type: "text",
      required: true,
    },
    {
      id: "O_content",
      name: "O_content",
      label: "기타 요청사항",
      type: "textarea",
      required: false,
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => (data[key] = value));
    console.log(data); // 여기서 서버로 데이터를 보낼 수 있습니다.
  };

  return (
    <Form
      title="견적 요청서 작성"
      fields={formFields}
      onSubmit={handleSubmit}
    />
  );
}

export default OrderPage;
