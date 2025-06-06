import styles from "./Field.module.css";

export function FieldLayout({ field, handleCellClick }) {
  return (
    <div className={styles.buttonContainer}>
      {field.map((cell, index) => (
        <button key={index} onClick={() => handleCellClick(index)}>
          {cell || "\u00A0"}{" "}
          {/* неразрывный пробел для сохранения вида кнопки */}
        </button>
      ))}
    </div>
  );
}
