import { Steps, ConfigProvider } from "antd";
import style from "@/components/QuizLayout.module.css";

export default function QuizLayout({ children }) {
  return (
    <div className="w-full">
      <header></header>
      <h2>Adventsgaver</h2>
      {children}
      <footer className={style.stripes}></footer>
    </div>
  );
}

// {visible === 1 && (
//     <section>
//       <p>Side 1</p>
//     </section>
//   )}
//   {visible === 2 && (
//     <section>
//       <p>Side 2</p>
//     </section>
//   )}
//   {visible === 3 && (
//     <section>
//       <p>Side 3</p>
//     </section>
//   )}
//   {visible === 4 && (
//     <section>
//       <p>Side 4</p>
//     </section>
//   )}
//   <button className="bg-gray-300 w-52 p-2 rounded mt-12" onClick={() => setVisible((o) => o + 1)}>
//     Næste
//   </button>
