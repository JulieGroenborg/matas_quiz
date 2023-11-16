import styles from "./RadioButton.module.css";

export default function RadioButton() {
  return (
    <>
      <div className="flex flex-col">
        <div className={`${styles.radioinput}`}>
          <input value="color-1" name="color" id="color-1" type="radio" />
          <label className="flex" htmlFor="color-1">
            <span className={styles.svg}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="Interface / Check">
                    {" "}
                    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#005B44" d="M6 12L10.2426 16.2426L18.727 7.75732" id="Vector"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </span>
            <div className="self-center ml-8">Under 75 kr</div>
          </label>
        </div>
        <div className={`${styles.radioinput}`}>
          <input value="color-2" name="color" id="color-2" type="radio" />
          <label className="flex" htmlFor="color-2">
            <span className={styles.svg}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="Interface / Check">
                    {" "}
                    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#005B44" d="M6 12L10.2426 16.2426L18.727 7.75732" id="Vector"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </span>
            <div className="self-center ml-8">250-400 kr</div>
          </label>
        </div>
      </div>
    </>
  );
}
