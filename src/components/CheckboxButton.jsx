import styles from "./CheckboxButton.module.css";
export default function CheckboxButton(props) {
  return (
    <label className={`${styles.label} mr-4 mb-4`}>
      <input className={styles.input} type="checkbox" name="select" />
      <div className={styles.div}>{props.text}</div>
    </label>
  );
}

{
  /* <span className={styles.span}>{props.text}</span> */
}
