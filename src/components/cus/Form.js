import React from "react";
import styles from "./Form.module.css";

function Form({ title, fields, onSubmit }) {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
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
              required={field.required}
            ></textarea>
          ) : field.type === "select" ? (
            <div className={styles.selectWrapper}>
              <select
                className={styles.input}
                id={field.id}
                name={field.name}
                required={field.required}
              >
                {field.options.map((option, idx) => (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <input
              className={styles.input}
              type={field.type}
              id={field.id}
              name={field.name}
              required={field.required}
            />
          )}
        </div>
      ))}
      <button className={styles.submitButton} type="submit">
        제출하기
      </button>
    </form>
  );
}

export default Form;
