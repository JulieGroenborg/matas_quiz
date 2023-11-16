"use client";
import CheckboxButton from "@/components/CheckboxButton";
import PrimaryButton from "@/components/PrimaryButton";
import ProductCard from "@/components/ProductCard";
import QuizLayout from "@/components/QuizLayout";
import RadioButton3 from "@/components/RadioButton3";
import RadioButton5 from "@/components/RadioButton5";
import SecondaryButton from "@/components/SecondaryButton";
import SquareRadioButtons from "@/components/SquareRadioButtons";
import { useState } from "react";

export default function Home() {
  //metode til at få vist "flere sider" ligesom i miniquizzen
  const [visible, setVisible] = useState(1);
  const [stepCount, setStepCount] = useState(0);
  const [details, setDetails] = useState();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-gray-300">
      <QuizLayout currentStep={stepCount}>
        {visible === 1 && (
          <section>
            <h3>Hvilket køn har gavemodtageren?</h3>
            <RadioButton3 text1="Kvinde" text2="Mand" text3="Andet" name="gender" />
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
            <h3>Hvad er alderen på gavemodtageren?</h3>
            <RadioButton3 text1="Teenager" text2="20-40 år" text3="Voksen 40+ år" />
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
            <h3>Hvilken kategori?</h3>
            <form className="grid grid-cols-2 mb-10 pl-5">
              <CheckboxButton text="Hudpleje" />
              <CheckboxButton text="Makeup" />
              <CheckboxButton text="Hår" />
              <CheckboxButton text="Parfumer" />
              <CheckboxButton text="Negle" />
              <CheckboxButton text="Skæg" />
            </form>
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
            <h3>Kender du gavemodtagerens præferencer?</h3>
            <SquareRadioButtons onChange={(value) => setDetails(value)}></SquareRadioButtons>

            <div className="hidden">
              <RadioButton3></RadioButton3>
            </div>
            <PrimaryButton
              text="Vis resultat"
              action={() => {
                setVisible((o) => o + 1);
                onChange = { answer };
              }}
            />
          </section>
        )}
        {visible === 5 && (
          <section>
            <h3>Hvad skal den 1. adventsgaven koste?</h3>
            <RadioButton5 text1="Under 75 kr." text2="75-250DKK" text3="250-400DKK" text4="Over 400DKK" text5="Spring 1. adventsgave over" name="first_gift" info="true" />
            <PrimaryButton
              text="Næste Step"
              action={() => {
                setVisible((o) => o + 1);
              }}
            />
          </section>
        )}
        {visible === 6 && (
          <section>
            <h3>Hvad skal den 2. adventsgaven koste?</h3>
            <RadioButton5 text1="Under 75 kr." text2="75-250DKK" text3="250-400DKK" text4="Over 400DKK" text5="Spring 2. adventsgave over" name="second_gift" info="true" />
            <PrimaryButton
              text="Næste Step"
              action={() => {
                setVisible((o) => o + 1);
              }}
            />
          </section>
        )}
        {visible === 7 && (
          <section>
            <h3>Hvad skal den 3. adventsgaven koste?</h3>
            <RadioButton5 text1="Under 75 kr." text2="75-250DKK" text3="250-400DKK" text4="Over 400DKK" text5="Spring 3. adventsgave over" name="second_gift" info="true" />
            <PrimaryButton
              text="Næste Step"
              action={() => {
                setVisible((o) => o + 1);
              }}
            />
          </section>
        )}
        {visible === 8 && (
          <section>
            <h3>Hvad skal den 4. adventsgaven koste?</h3>
            <RadioButton5 text1="Under 75 kr." text2="75-250DKK" text3="250-400DKK" text4="Over 400DKK" text5="Spring 4. adventsgave over" name="second_gift" info="true" />
            <PrimaryButton
              text="Næste Step"
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
