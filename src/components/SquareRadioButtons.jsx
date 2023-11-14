import styles from "./SquareRadioButtons.module.css";

export default function SquareRadioButtons() {
  return (
    <div className="flex">
      <label className={styles.label}>
        <input className={styles.input} type="radio" name="select" />
        <span className={styles.span}>Naturlig</span>
      </label>
      <label className={styles.label}>
        <input className={styles.input} type="radio" name="select" />
        <span className={styles.span}>Mat</span>
      </label>
      <label className={styles.label}>
        <input className={styles.input} type="radio" name="select" />
        <span className={styles.span}>Glødende</span>
      </label>
    </div>
  );
}
