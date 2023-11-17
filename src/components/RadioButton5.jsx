import { Popover } from "antd";

import styles from "./RadioButton.module.css";

export default function RadioButton5({ text1, text2, text3, text4, text5, name, info }) {
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
        <div className={`${styles.radioinput}`}>
          <input value={text4} name={name} id={text4} type="radio" />
          <label className="flex" htmlFor={text4}>
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
            <p className="self-center ml-8">{text4}</p>
          </label>
        </div>
        <div className={`${styles.radioinput}`}>
          <input value={text5} name={name} id={text5} type="radio" />
          <label className="flex" htmlFor={text5}>
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
            <p className="self-center ml-8">{text5} </p>
          </label>
          {info === "true" && (
            <Popover placement="bottomRight" trigger="click" title="Mulighed for at fravælge denne gave" className="self-center ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#004634" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412l-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
              </svg>
            </Popover>
          )}
        </div>
      </form>
    </>
  );
}

{
  /* <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#004634" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412l-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
</svg>; */
}

{
  /* <Popover
      style={{
        width: 500,
      }}
      content={hoverContent}
      title="Hover title"
      trigger="hover"
      open={hovered}
      onOpenChange={handleHoverChange}
    >
      <Popover
        content={
          <div>
            {clickContent}
            <a onClick={hide}>Close</a>
          </div>
        }
        title="Click title"
        trigger="click"
        open={clicked}
        onOpenChange={handleClickChange}
      >
        <Button>Hover and click / 悬停并单击</Button>
      </Popover>
    </Popover> */
}
