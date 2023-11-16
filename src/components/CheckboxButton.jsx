import styles from "./CheckboxButton.module.css";
export default function CheckboxButton(props) {
  return (
    <label className={styles.label}>
      <input className={styles.input} type="checkbox" name="select" />
      <span className={styles.span}>{props.text}</span>
    </label>
  );
}
