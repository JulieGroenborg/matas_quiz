"use client";
import PrimaryButton from "@/components/PrimaryButton";
import SquareCheckboxes from "@/components/SquareCheckboxes";
import SquareRadioButtons from "@/components/SquareRadioButtons";
import { useState } from "react";

export default function Home() {
  //metode til at få vist "flere sider" ligesom i miniquizzen
  const [visible, setVisible] = useState(1);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      {visible === 1 && (
        <section>
          <img src="./header_img.png" alt="En gave" />
          <img className="grid ml-auto mr-auto mt-3" src="./timestamp.png" alt="Tidslinje" />
          <h1 className="text-sm mt-3">Adventsgaver</h1>
          <h2 className="text-lg mt-8">Hvad er alderen på gavemodtageren?</h2>
          <form className="flex flex-col mt-3" action="">
            <label className="mt-2">
              <input type="checkbox" name="checkbox1" /> 4-10 år
            </label>
            <label className="mt-2">
              <input type="checkbox" name="checkbox2" /> 20-40 år
            </label>
            <label className="mt-2">
              <input type="checkbox" name="checkbox3" /> 40+ år
            </label>
          </form>
          <h2 className="text-lg mt-8">Hvilken Kategori?</h2>
          <div className="grid grid-cols-2">
            <button className="bg-green-200 rounded w-32">Hudpleje</button>
            <button className="bg-green-200 rounded w-32">Makeup</button>
            <button className="bg-green-200 rounded w-32 mt-4">Hår</button>
            <button className="bg-green-200 rounded w-32 mt-4">Parfume</button>
          </div>
        </section>
      )}
      {visible === 2 && (
        <section>
          <img src="./header_img.png" alt="En gave" />
          <img className="grid ml-auto mr-auto mt-3" src="./timestamp.png" alt="Tidslinje" />
          <h1 className="text-sm mt-3">Adventsgaver</h1>
          <h2 className="text-lg mt-8">
            Kender du gavemodtagerens hudtype og <br></br>makeup rutine?
          </h2>

          <div className="grid grid-cols-2">
            <button className="bg-green-200 rounded w-32 mt-4">Ja</button>
            <button className="bg-green-200 rounded w-32 mt-4">Nej</button>
          </div>
        </section>
      )}
      {visible === 3 && (
        <section>
          <img src="./header_img.png" alt="En gave" />
          <img className="grid ml-auto mr-auto mt-3" src="./timestamp.png" alt="Tidslinje" />
          <h1 className="text-sm mt-3">Adventsgaver</h1>
          <h2 className="text-lg mt-8">Hvad skal den 1. adventsgaven koste?</h2>
          <form className="flex flex-col mt-3" action="">
            <label className="mt-2">
              <input type="checkbox" name="checkbox1" /> 0-10DKK
            </label>
            <label className="mt-2">
              <input type="checkbox" name="checkbox2" /> 10-200DKK
            </label>
            <label className="mt-2">
              <input type="checkbox" name="checkbox3" /> 200-300DKK
            </label>
            <label className="mt-2">
              <input type="checkbox" name="checkbox2" /> 300-400DKK
            </label>
            <label className="mt-2">
              <input type="checkbox" name="checkbox3" /> Over 400DKK
            </label>
          </form>
        </section>
      )}
      {visible === 4 && (
        <section>
          <img src="./header_img.png" alt="En gave" />
          <img className="grid ml-auto mr-auto mt-3" src="./timestamp.png" alt="Tidslinje" />
          <h1 className="text-sm mt-3">Adventsgaver</h1>
          <h2 className="text-lg mt-8">Her er dine udvalgte adventsgaver</h2>
          <div className="grid grid-cols-2">
            <img className="p-2" src="./produkt1.png" alt="" />
            <img className="p-2" src="./produkt2.png" alt="" />
            <img className="p-2" src="./produkt2.png" alt="" />
            <img className="p-2" src="./produkt1.png" alt="" />
          </div>
          <p className="text-sm mt-2">
            Er der nogle produkter du vil skifte ud? Klik på <br></br> dem du vil udskifte, og klik derefter på knappen under
          </p>
          <button className="bg-red-200 w-48 p-2 rounded mt-2 grid ml-auto mr-auto">Udskift produkter</button>
        </section>
      )}

      <button className="bg-gray-300 w-52 p-2 rounded mt-12" onClick={() => setVisible((o) => o + 1)}>
        Næste
      </button>
      <hr className="mb-48" />
      <PrimaryButton bg="bg-green-800" text="Næste step" color="text-slate-50" width="w-4/5"></PrimaryButton>
      <PrimaryButton bg="bg-red-200" text="Udskift produkter"></PrimaryButton>
      <PrimaryButton bg="bg-green-800" text="Læg i kurv" color="text-slate-50" width="w-4/5"></PrimaryButton>
      <SquareRadioButtons></SquareRadioButtons>
      <SquareCheckboxes></SquareCheckboxes>
    </main>
  );
}
