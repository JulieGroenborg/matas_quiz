import styles from "./CheckboxButton.module.css";
import { useState } from "react";
export default function CheckboxButton({ text, name, onChange, categories }) {
  //Jeg har lavet et state som tjekker efter om knappen er checked eller ej
  const [isNotChecked, setIsNotChecked] = useState(false);

  return (
    <label className={`${styles.label} mr-4 mb-4`}>
      <input
        className={styles.input}
        type="checkbox"
        name={name}
        value={text}
        //Knappen er pr. default un-checked
        defaultChecked={isNotChecked}
        onChange={() => {
          //Ved ændringer står den og toggler imellem at være checked/un-checked
          setIsNotChecked((state) => !state);
          //Jeg har lavet if/else, så der kan ske noget, når knappen er checked og un-checked
          if (!isNotChecked) {
            // console.log("Current categories:", categories);
            //Tilføjer item til arrayet
            onChange((categories) => [...categories, text]);
          } else if (isNotChecked) {
            //Fjerner item fra arrayet
            onChange((categories) => categories.filter((category) => category !== text));
          }
        }}
      />
      <div className={styles.div}>{text}</div>
    </label>
  );
}

{
  /* <span className={styles.span}>{props.text}</span> */
}
