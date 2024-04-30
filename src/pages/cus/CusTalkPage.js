import React from "react";
import Form from "../../components/cus/Form";

function TalkPage() {
  const formFields = [
    {
      id: "GC_name",
      name: "GC_name",
      label: "이름 및 업체명",
      type: "text",
      required: true,
    },
    {
      id: "GC_phone",
      name: "GC_phone",
      label: "연락처",
      type: "text",
      required: true,
    },
    {
      id: "GC_email",
      name: "GC_email",
      label: "이메일",
      type: "email",
      required: true,
    },
    {
      id: "GC_type",
      name: "GC_type",
      label: "문의유형",
      type: "select",
      required: true,
      options: ["구매", "A/S", "상담"],
    },
    {
      id: "GC_product",
      name: "GC_product",
      label: "문의상품명",
      type: "text",
      required: false,
    },

    {
      id: "GC_content",
      name: "GC_content",
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
      title="상담 문의서 작성"
      fields={formFields}
      onSubmit={handleSubmit}
    />
  );
}

export default TalkPage;
