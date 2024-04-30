import React from "react";
import Form from "../../components/cus/Form";

function AsPage() {
  const formFields = [
    {
      id: "R_name",
      name: "R_name",
      label: "이름 및 업체명",
      type: "text",
      required: true,
    },
    {
      id: "R_phone",
      name: "R_phone",
      label: "연락처",
      type: "text",
      required: true,
    },
    {
      id: "R_email",
      name: "R_email",
      label: "이메일",
      type: "email",
      required: true,
    },
    {
      id: "R_product",
      name: "R_product",
      label: "수리 상품명",
      type: "text",
      required: true,
    },

    {
      id: "R_type",
      name: "R_type",
      label: "수리유형",
      type: "select", // 변경: input에서 select로 변경
      required: true,
      options: ["기계 멈춤 현상", "부품 마모/손상", "기계 오작동", "기타"], // 추가: select 옵션
    },
    {
      id: "R_content",
      name: "R_content",
      label: "기타 요청사항",
      type: "textarea",
      required: true,
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
      title="A/S 수리 요청서 작성"
      fields={formFields}
      onSubmit={handleSubmit}
    />
  );
}

export default AsPage;
