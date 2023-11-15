"use client";
import PrimaryButton from "@/components/PrimaryButton";
import QuizLayout from "@/components/QuizLayout";
import SquareCheckboxes from "@/components/SquareCheckboxes";
import SquareRadioButtons from "@/components/SquareRadioButtons";
import { useState } from "react";

export default function Home() {
  //metode til at få vist "flere sider" ligesom i miniquizzen
  const [visible, setVisible] = useState(1);
  const [stepCount, setStepCount] = useState(0);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <QuizLayout currentStep={stepCount}>
        {visible === 1 && (
          <section>
            <p>køn</p>
            <PrimaryButton
              bg="bg-green-800"
              text="Næste step"
              color="text-slate-50"
              width="w-4/5"
              action={() => {
                setVisible((o) => o + 1);
              }}
            ></PrimaryButton>
          </section>
        )}
        {visible === 2 && (
          <section>
            <p>alder</p>
            <PrimaryButton
              bg="bg-green-800"
              text="Næste step"
              color="text-slate-50"
              width="w-4/5"
              action={() => {
                setVisible((o) => o + 1);
              }}
            ></PrimaryButton>
          </section>
        )}
        {visible === 3 && (
          <section>
            <p>kategori</p>
            <PrimaryButton
              bg="bg-green-800"
              text="Næste step"
              color="text-slate-50"
              width="w-4/5"
              action={() => {
                setVisible((o) => o + 1);
              }}
            ></PrimaryButton>
          </section>
        )}
        {visible === 4 && (
          <section>
            <p>kender du dem?</p>
            <PrimaryButton
              bg="bg-green-800"
              text="Næste step"
              color="text-slate-50"
              width="w-4/5"
              action={() => {
                setVisible((o) => o + 1);
                setStepCount((o) => o + 1);
              }}
            ></PrimaryButton>
          </section>
        )}
        {visible === 5 && (
          <section>
            <p>1</p>
            <PrimaryButton
              bg="bg-green-800"
              text="Næste step"
              color="text-slate-50"
              width="w-4/5"
              action={() => {
                setVisible((o) => o + 1);
              }}
            ></PrimaryButton>
          </section>
        )}
        {visible === 6 && (
          <section>
            <p>2</p>
            <PrimaryButton
              bg="bg-green-800"
              text="Næste step"
              color="text-slate-50"
              width="w-4/5"
              action={() => {
                setVisible((o) => o + 1);
              }}
            ></PrimaryButton>
          </section>
        )}
        {visible === 7 && (
          <section>
            <p>3</p>
            <PrimaryButton
              bg="bg-green-800"
              text="Næste step"
              color="text-slate-50"
              width="w-4/5"
              action={() => {
                setVisible((o) => o + 1);
              }}
            ></PrimaryButton>
          </section>
        )}
        {visible === 8 && (
          <section>
            <p>4</p>
            <PrimaryButton
              bg="bg-green-800"
              text="Næste step"
              color="text-slate-50"
              width="w-4/5"
              action={() => {
                setVisible((o) => o + 1);
                setStepCount((o) => o + 1);
              }}
            ></PrimaryButton>
          </section>
        )}
        {visible === 9 && (
          <section>
            <p>resultat</p>
            <PrimaryButton
              bg="bg-green-800"
              text="
          Sidste step"
              color="text-slate-50"
              width="w-4/5"
              action={() => {
                console.log("Færdig");
              }}
            ></PrimaryButton>
          </section>
        )}
      </QuizLayout>
      <hr className="mb-48" />
      <PrimaryButton bg="bg-green-800" text="Næste step" color="text-slate-50" width="w-4/5"></PrimaryButton>
      <PrimaryButton bg="bg-red-200" text="Udskift produkter"></PrimaryButton>
      <PrimaryButton bg="bg-green-800" text="Læg i kurv" color="text-slate-50" width="w-4/5"></PrimaryButton>
      <SquareRadioButtons></SquareRadioButtons>
      <SquareCheckboxes></SquareCheckboxes>
    </main>
  );
}
