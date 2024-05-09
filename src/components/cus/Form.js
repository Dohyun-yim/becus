import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./Form.module.css";

Modal.setAppElement("#root");

function Form({ title, fields, onSubmit }) {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    for (let field of fields) {
      if (field.required && !formData[field.name]) {
        setErrorModalOpen(true);
        return false;
      }
    }
    return true;
  };

  const handleOpenModal = () => {
    if (validateForm()) {
      setModalIsOpen(true);
    }
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setErrorModalOpen(false);
  };

  const handleConfirmSubmit = () => {
    onSubmit(formData);
    setModalIsOpen(false);
    setFormData(
      fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
    );
  };

  return (
    <div>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <h1 className={styles.title}>{title}</h1>
        {fields.map((field, index) => (
          <div className={styles.field} key={index}>
            <label htmlFor={field.id} className={styles.label}>
              {field.label}
              {field.required && <span className={styles.requiredStar}>*</span>}
            </label>
            {field.type === "textarea" ? (
              <textarea
                className={styles.textarea}
                id={field.id}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required={field.required}
              />
            ) : field.type === "select" ? (
              <select
                className={styles.select}
                id={field.id}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required={field.required}
              >
                {field.options.map((option, idx) => (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                className={styles.input}
                type={field.type}
                id={field.id}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required={field.required}
              />
            )}
          </div>
        ))}
        <button
          type="button"
          className={styles.submitButton}
          onClick={handleOpenModal}
        >
          제출하기
        </button>
      </form>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Confirm Submission"
        overlayClassName={styles.modalOverlay}
        className={styles.modalContent}
      >
        <h3>제출 하시겠습니까?</h3>
        <button onClick={handleConfirmSubmit} className={styles.modalButton}>
          예
        </button>
        <button onClick={handleCloseModal} className={styles.modalButton}>
          아니요
        </button>
      </Modal>
      <Modal
        isOpen={errorModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Error"
        overlayClassName={styles.modalOverlay}
        className={styles.modalContent}
      >
        <h4>오류</h4>
        <p>필수 값을 입력해주세요!</p>
        <button onClick={handleCloseModal} className={styles.modalButton}>
          확인
        </button>
      </Modal>
    </div>
  );
}

export default Form;
