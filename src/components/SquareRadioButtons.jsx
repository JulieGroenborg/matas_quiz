import styles from "./SquareRadioButtons.module.css";

export default function SquareRadioButtons({ showDetails, onChange }) {
  return (
    <form className="flex pt-8 mb-14 place-content-center">
      <label className={`${styles.label}`}>
        <input onChange={() => onChange("show")} checked={showDetails === "show"} value="show" className={styles.input} type="radio" name="select" />
        <span className={styles.span}>Ja</span>
      </label>
      <label className={`${styles.label} ml-5`}>
        <input onChange={() => onChange("hide")} checked={showDetails === "hide"} value="hide" className={styles.input} type="radio" name="select" />
        <span className={styles.span}>Nej</span>
      </label>
    </form>
  );
}
