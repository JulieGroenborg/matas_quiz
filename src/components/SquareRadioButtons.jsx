import styles from "./SquareRadioButtons.module.css";
import { useState } from "react";

export default function SquareRadioButtons() {
  const [selectedValue, setSelectedValue] = useState(null);

  function onChange(event) {
    setSelectedValue(event.target.value);
    console.log(event.target.value);
  }

  return (
    <form className="flex pt-8 mb-14 place-content-center">
      <label className={`${styles.label}`}>
        <input onChange={onChange} checked={selectedValue === "true"} value="truhhe" className={styles.input} type="radio" name="select" />
        <span className={styles.span}>Ja</span>
      </label>
      <label className={`${styles.label} ml-5`}>
        <input onChange={onChange} checked={selectedValue === "false"} value="false" className={styles.input} type="radio" name="select" />
        <span className={styles.span}>Nej</span>
      </label>
    </form>
  );
}
