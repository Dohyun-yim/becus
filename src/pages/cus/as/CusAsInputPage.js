import React, { useState } from "react";
import styles from "./CusAsInputPage.module.css";

function CusAsInputPage() {
  const [step, setStep] = useState(1);
  const [partNumber, setPartNumber] = useState("");
  const [productInfo, setProductInfo] = useState({});
  const [repairType, setRepairType] = useState("");

  const handlePartNumberSubmit = () => {
    setProductInfo({ name: "제품명", model: "모델명" });
    setStep(2);
  };

  const handleRepairTypeSubmit = () => {
    setStep(3);
  };

  const handleFinalSubmit = () => {
    console.log({ partNumber, productInfo, repairType });
  };

  const goBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className={styles.cusAsInputContainer}>
      <h1 className={styles.cusAsInputHeader}>A/S 수리 요청</h1>
      {step === 1 && (
        <div className={styles.cusAsInputStep}>
          <label className={styles.cusAsInputLabel}>
            어떤 상품인가요? (품번을 정확히 입력해주세요.)
            <input
              type="text"
              value={partNumber}
              onChange={(e) => setPartNumber(e.target.value)}
              className={styles.cusAsInputInput}
            />
          </label>
          <button
            onClick={handlePartNumberSubmit}
            className={styles.cusAsInputButton}
          >
            다음
          </button>
        </div>
      )}
      {step === 2 && (
        <div className={styles.cusAsInputStep}>
          <p className={styles.cusAsInputProductInfo}>
            제품 {productInfo.name}
          </p>
          <p className={styles.cusAsInputProductInfo}>
            모델명 {productInfo.model}
          </p>
          <label className={styles.cusAsInputLabel}>
            수리 유형 선택:
            <select
              value={repairType}
              onChange={(e) => setRepairType(e.target.value)}
              className={styles.cusAsInputSelect}
            >
              <option value="">선택하세요</option>
              <option value="stop">기계 멈춤 현상</option>
              <option value="worn">부품 마모/손상</option>
              <option value="error">기계 오작동</option>
              <option value="other">기타</option>
            </select>
          </label>
          <div>
            <button
              onClick={handleRepairTypeSubmit}
              className={styles.cusAsInputButton}
            >
              다음
            </button>
            <button
              onClick={goBack}
              className={`${styles.cusAsInputButton} ${styles.cusAsInputBackButton}`}
            >
              이전
            </button>
          </div>
        </div>
      )}
      {step === 3 && (
        <div className={styles.cusAsInputStep}>
          <button
            onClick={handleFinalSubmit}
            className={styles.cusAsInputButton}
          >
            A/S 수리 요청서 작성
          </button>
          <button
            onClick={goBack}
            className={`${styles.cusAsInputButton} ${styles.cusAsInputBackButton}`}
          >
            이전
          </button>
        </div>
      )}
    </div>
  );
}

export default CusAsInputPage;
