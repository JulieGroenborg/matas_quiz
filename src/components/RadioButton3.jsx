import styles from "./RadioButton.module.css";

export default function RadioButton3({ text1, text2, text3, name }) {
  return (
    <>
      <form className="flex flex-col pl-5 pt-3 mb-10">
        <div className={`${styles.radioinput}`}>
          <input value={text1} name={name} id={text1} type="radio" />
          <label className="flex" htmlFor={text1}>
            <span className={styles.svg}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="Interface / Check">
                    {" "}
                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="#005B44" d="M6 12L10.2426 16.2426L18.727 7.75732" id="Vector"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </span>
            <p className="self-center ml-8">{text1}</p>
          </label>
        </div>
        <div className={`${styles.radioinput}`}>
          <input value={text2} name={name} id={text2} type="radio" />
          <label className="flex" htmlFor={text2}>
            <span className={styles.svg}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="Interface / Check">
                    {" "}
                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="#005B44" d="M6 12L10.2426 16.2426L18.727 7.75732" id="Vector"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </span>
            <p className="self-center ml-8">{text2}</p>
          </label>
        </div>
        <div className={`${styles.radioinput}`}>
          <input value={text3} name={name} id={text3} type="radio" />
          <label className="flex" htmlFor={text3}>
            <span className={styles.svg}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="Interface / Check">
                    {" "}
                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="#005B44" d="M6 12L10.2426 16.2426L18.727 7.75732" id="Vector"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </span>
            <p className="self-center ml-8">{text3}</p>
          </label>
        </div>
      </form>
    </>
  );
}
