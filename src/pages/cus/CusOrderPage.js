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
      label: "상품명",
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
