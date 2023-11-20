// api: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNib2F3YnZka2dieHV5aWh1eXpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY4NTE1MzAsImV4cCI6MjAxMjQyNzUzMH0.Iq40XCZG1EvkMh2BD41TMTkAK97Ow5WwUwb_7tDsZeI
// url: https://cboawbvdkgbxuyihuyzj.supabase.co/rest/v1/matas_products
"use client";
import CheckboxButton from "@/components/CheckboxButton";
import PrimaryButton from "@/components/PrimaryButton";
import ProductCard from "@/components/ProductCard";
import QuizLayout from "@/components/QuizLayout";
import RadioButton3 from "@/components/RadioButton3";
import RadioButton5 from "@/components/RadioButton5";
import SecondaryButton from "@/components/SecondaryButton";
import SquareRadioButtons from "@/components/SquareRadioButtons";
// import Fetching from "@/components/Fetching";
// import { Fetching } from "@/components/Fetching.js";

// import next from "next";
import { useState } from "react";

export default function Main({ data }) {
  //metode til at få vist "flere sider" ligesom i miniquizzen
  const [visible, setVisible] = useState(1);
  const [stepCount, setStepCount] = useState(0);
  const [showDetails, setShowDetails] = useState("hide");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-gray-300">
      <QuizLayout currentStep={stepCount}>
        {visible === 1 && (
          <section>
            <h3>Hvilket køn har gavemodtageren?</h3>
            <RadioButton3
              text1="Kvinde"
              text2="Mand"
              text3="Andet"
              name="gender"
              onChange={setGender}
              action={() => {
                setVisible((o) => o + 1);
              }}
            />
            {/* <PrimaryButton
              text="Næste Step"
              action={(e) => {
                e.preventDefault();
                setVisible((o) => o + 1);
              }}
            /> */}
          </section>
        )}
        {visible === 2 && (
          <section>
            <h3>Hvad er alderen på gavemodtageren?</h3>
            <RadioButton3
              text1="Teenager"
              text2="20-40 år"
              text3="Voksen 40+ år"
              name="age"
              onChange={setAge}
              action={() => {
                setVisible((o) => o + 1);
              }}
            />
            {/* <PrimaryButton
              text="Næste Step"
              action={() => {
                setVisible((o) => o + 1);
                setStepCount((o) => o + 1);
              }}
            /> */}
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
            <SquareRadioButtons showDetails={showDetails} onChange={setShowDetails}></SquareRadioButtons>
            <div className={showDetails === "show" ? "" : "hidden"}>
              <RadioButton3></RadioButton3>
            </div>
            <PrimaryButton
              text="Næste step"
              action={() => {
                setVisible((o) => o + 1);
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
