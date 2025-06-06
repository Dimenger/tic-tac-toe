import styles from "./Information.module.css";

export function InformationLayout({ message }) {
  return (
    <div className={styles.information}>
      <h2>{message}</h2>
    </div>
  );
}
