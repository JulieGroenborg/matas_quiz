"use client";
import CheckboxButton from "@/components/CheckboxButton";
import PrimaryButton from "@/components/PrimaryButton";
import ProductCard from "@/components/ProductCard";
import QuizLayout from "@/components/QuizLayout";
import RadioButton3 from "@/components/RadioButton3";
import SecondaryButton from "@/components/SecondaryButton";
import SquareRadioButtons from "@/components/SquareRadioButtons";
import { useState } from "react";

export default function Home() {
  //metode til at få vist "flere sider" ligesom i miniquizzen
  const [visible, setVisible] = useState(1);
  const [stepCount, setStepCount] = useState(0);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-gray-300">
      <QuizLayout currentStep={stepCount}>
        {visible === 1 && (
          <section>
            <h3>Hvilket køn har gavemodtageren?</h3>
            <RadioButton3 text1="Kvinde" text2="Mand" text3="Andet" />
            <PrimaryButton
              text="Næste Step"
              action={() => {
                setVisible((o) => o + 1);
              }}
            />
          </section>
        )}
        {visible === 2 && (
          <section>
            <p>Side 2</p>
            <PrimaryButton
              text="Næste Step"
              action={() => {
                setVisible((o) => o + 1);
                setStepCount((o) => o + 1);
              }}
            />
          </section>
        )}
        {visible === 3 && (
          <section>
            <p>Side 3</p>
            <PrimaryButton
              text="Næste Step"
              action={() => {
                setVisible((o) => o + 1);
                setStepCount((o) => o + 1);
              }}
            />
          </section>
        )}
        {visible === 4 && (
          <section>
            <p>Side 4</p>
            <PrimaryButton
              text="Vis resultat"
              action={() => {
                setVisible((o) => o + 1);
              }}
            />
          </section>
        )}
      </QuizLayout>

      <hr className="mb-48" />
      <div className="grid grid-cols-2">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
      <PrimaryButton></PrimaryButton>
      <SquareRadioButtons></SquareRadioButtons>
      <SecondaryButton></SecondaryButton>
      <CheckboxButton></CheckboxButton>
    </main>
  );
}
