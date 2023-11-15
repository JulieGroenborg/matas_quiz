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
          <p>Side 1</p>
        </section>
      )}
      {visible === 2 && (
        <section>
          <p>Side 2</p>
        </section>
      )}
      {visible === 3 && (
        <section>
          <p>Side 3</p>
        </section>
      )}
      {visible === 4 && (
        <section>
          <p>Side 4</p>
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