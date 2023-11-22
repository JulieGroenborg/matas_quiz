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
import { useState } from "react";

export default function Main({ data }) {
  //metode til at få vist "flere sider" ligesom i miniquizzen
  const [visible, setVisible] = useState(1);
  const [stepCount, setStepCount] = useState(0);

  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");

  const [categories, setCategories] = useState([]);

  const [showDetails, setShowDetails] = useState("hide");
  const [firstPrice, setFirstPrice] = useState("");
  const [secondPrice, setSecondPrice] = useState("");
  const [thirdPrice, setThirdPrice] = useState("");
  const [fourthPrice, setFourthPrice] = useState("");

  let giftOne = "";
  let giftTwo = "";
  let giftThree = "";
  let giftFourth = "";

  function filtreData() {
    let priceOne = "";
    let priceTwo = "";
    let priceThree = "";
    let priceFourth = "";

    if (gender === "mand") {
      //Køn: filtrerer efter køn, og viser kun produkter til mænd
      const newData = data.filter((item) => item.gender !== "kvinde");
      //Kategori: filtrerer efter category, og viser produktet hvis ordene i "categories" matcher med ordene i "item.category"
      const newData2 = newData.filter((item) => categories.includes(item.category));

      //Pris: filtrerer newData2 alt efter hvilken prisknap du har trykket på (på første pris-side)
      if (firstPrice === "Under 75 kr.") {
        priceOne = newData2.filter((item) => item.price <= 75);
        console.log("pris 1", priceOne);
      } else if (firstPrice === "75-250 kr.") {
        priceOne = newData2.filter((item) => item.price >= 75 && item.price <= 250);
      } else if (firstPrice === "250-400 kr.") {
        priceOne = newData2.filter((item) => item.price >= 250 && item.price <= 400);
      } else if (firstPrice === "Over 400 kr.") {
        priceOne = newData2.filter((item) => item.price >= 400);
      } else {
        priceOne = [];
      }

      //Pris: filtrerer newData2 alt efter hvilken prisknap du har trykket på (på anden pris-side)
      if (secondPrice === "Under 75 kr.") {
        priceTwo = newData2.filter((item) => item.price <= 75);
        console.log("pris 2", priceTwo);
      } else if (secondPrice === "75-250 kr.") {
        priceTwo = newData2.filter((item) => item.price >= 75 && item.price <= 250);
      } else if (secondPrice === "250-400 kr.") {
        priceTwo = newData2.filter((item) => item.price >= 250 && item.price <= 400);
      } else if (secondPrice === "Over 400 kr.") {
        priceTwo = newData2.filter((item) => item.price >= 400);
      } else {
        priceTwo = [];
      }

      //Pris: filtrerer newData2 alt efter hvilken prisknap du har trykket på (på tredje pris-side)
      if (thirdPrice === "Under 75 kr.") {
        priceThree = newData2.filter((item) => item.price <= 75);
        console.log("pris 3", priceThree);
      } else if (thirdPrice === "75-250 kr.") {
        priceThree = newData2.filter((item) => item.price >= 75 && item.price <= 250);
      } else if (thirdPrice === "250-400 kr.") {
        priceThree = newData2.filter((item) => item.price >= 250 && item.price <= 400);
      } else if (thirdPrice === "Over 400 kr.") {
        priceThree = newData2.filter((item) => item.price >= 400);
      } else {
        priceThree = [];
      }

      //Pris: filtrerer newData2 alt efter hvilken prisknap du har trykket på (på 4. pris-side)
      if (fourthPrice === "Under 75 kr.") {
        priceFourth = newData2.filter((item) => item.price <= 75);
        console.log("pris 4", priceFourth);
      } else if (fourthPrice === "75-250 kr.") {
        priceFourth = newData2.filter((item) => item.price >= 75 && item.price <= 250);
      } else if (fourthPrice === "250-400 kr.") {
        priceFourth = newData2.filter((item) => item.price >= 250 && item.price <= 400);
      } else if (fourthPrice === "Over 400 kr.") {
        priceFourth = newData2.filter((item) => item.price >= 400);
      } else {
        priceFourth = [];
      }
    } else if (gender === "kvinde") {
      //Køn: filtrerer efter køn, og viser kun produkter til kvinder
      const newData = data.filter((item) => item.gender !== "mand");
      //Kategori: filtrerer efter category, og viser produktet hvis ordene i "categories" matcher med ordene i "item.category"
      const newData2 = newData.filter((item) => categories.includes(item.category));

      //Pris: filtrerer newData2 alt efter hvilken prisknap du har trykket på (på første pris-side)
      if (firstPrice === "Under 75 kr.") {
        priceOne = newData2.filter((item) => item.price <= 75);
        console.log("pris 1", priceOne);
      } else if (firstPrice === "75-250 kr.") {
        priceOne = newData2.filter((item) => item.price >= 75 && item.price <= 250);
      } else if (firstPrice === "250-400 kr.") {
        priceOne = newData2.filter((item) => item.price >= 250 && item.price <= 400);
      } else if (firstPrice === "Over 400 kr.") {
        priceOne = newData2.filter((item) => item.price >= 400);
      } else {
        priceOne = [];
      }

      //Pris: filtrerer newData2 alt efter hvilken prisknap du har trykket på (på anden pris-side)
      if (secondPrice === "Under 75 kr.") {
        priceTwo = newData2.filter((item) => item.price <= 75);
      } else if (secondPrice === "75-250 kr.") {
        priceTwo = newData2.filter((item) => item.price >= 75 && item.price <= 250);
        console.log("pris 2", priceTwo);
      } else if (secondPrice === "250-400 kr.") {
        priceTwo = newData2.filter((item) => item.price >= 250 && item.price <= 400);
      } else if (secondPrice === "Over 400 kr.") {
        priceTwo = newData2.filter((item) => item.price >= 400);
      } else {
        priceTwo = [];
      }

      //Pris: filtrerer newData2 alt efter hvilken prisknap du har trykket på (på tredje pris-side)
      if (thirdPrice === "Under 75 kr.") {
        priceThree = newData2.filter((item) => item.price <= 75);
      } else if (thirdPrice === "75-250 kr.") {
        priceThree = newData2.filter((item) => item.price >= 75 && item.price <= 250);
      } else if (thirdPrice === "250-400 kr.") {
        priceThree = newData2.filter((item) => item.price >= 250 && item.price <= 400);
        console.log("pris 3", priceThree);
      } else if (thirdPrice === "Over 400 kr.") {
        priceThree = newData2.filter((item) => item.price >= 400);
      } else {
        priceThree = [];
      }

      //Pris: filtrerer newData2 alt efter hvilken prisknap du har trykket på (på 4. pris-side)
      if (fourthPrice === "Under 75 kr.") {
        priceFourth = newData2.filter((item) => item.price <= 75);
      } else if (fourthPrice === "75-250 kr.") {
        priceFourth = newData2.filter((item) => item.price >= 75 && item.price <= 250);
      } else if (fourthPrice === "250-400 kr.") {
        priceFourth = newData2.filter((item) => item.price >= 250 && item.price <= 400);
      } else if (fourthPrice === "Over 400 kr.") {
        priceFourth = newData2.filter((item) => item.price >= 400);
        console.log("pris 4", priceFourth);
      } else {
        priceFourth = [];
      }
    } else if (gender === "neutral") {
      //Køn: filtrerer efter køn, og viser produkter til alle/neutral
      const newData = data.filter((item) => item);
      //Kategori: filtrerer efter category, og viser produktet hvis ordene i "categories" matcher med ordene i "item.category"
      const newData2 = newData.filter((item) => categories.includes(item.category));

      //Pris: filtrerer newData2 alt efter hvilken prisknap du har trykket på (på første pris-side)
      if (firstPrice === "Under 75 kr.") {
        priceOne = newData2.filter((item) => item.price <= 75);
        console.log("pris 1", priceOne);
      } else if (firstPrice === "75-250 kr.") {
        priceOne = newData2.filter((item) => item.price >= 75 && item.price <= 250);
      } else if (firstPrice === "250-400 kr.") {
        priceOne = newData2.filter((item) => item.price >= 250 && item.price <= 400);
      } else if (firstPrice === "Over 400 kr.") {
        priceOne = newData2.filter((item) => item.price >= 400);
      } else {
        priceOne = [];
      }

      //Pris: filtrerer newData2 alt efter hvilken prisknap du har trykket på (på anden pris-side)
      if (secondPrice === "Under 75 kr.") {
        priceTwo = newData2.filter((item) => item.price <= 75);
        console.log("pris 2", priceTwo);
      } else if (secondPrice === "75-250 kr.") {
        priceTwo = newData2.filter((item) => item.price >= 75 && item.price <= 250);
      } else if (secondPrice === "250-400 kr.") {
        priceTwo = newData2.filter((item) => item.price >= 250 && item.price <= 400);
      } else if (secondPrice === "Over 400 kr.") {
        priceTwo = newData2.filter((item) => item.price >= 400);
      } else {
        priceTwo = [];
      }

      //Pris: filtrerer newData2 alt efter hvilken prisknap du har trykket på (på tredje pris-side)
      if (thirdPrice === "Under 75 kr.") {
        priceThree = newData2.filter((item) => item.price <= 75);
        console.log("pris 3", priceThree);
      } else if (thirdPrice === "75-250 kr.") {
        priceThree = newData2.filter((item) => item.price >= 75 && item.price <= 250);
      } else if (thirdPrice === "250-400 kr.") {
        priceThree = newData2.filter((item) => item.price >= 250 && item.price <= 400);
      } else if (thirdPrice === "Over 400 kr.") {
        priceThree = newData2.filter((item) => item.price >= 400);
      } else {
        priceThree = [];
      }

      //Pris: filtrerer newData2 alt efter hvilken prisknap du har trykket på (på 4. pris-side)
      if (fourthPrice === "Under 75 kr.") {
        priceFourth = newData2.filter((item) => item.price <= 75);
        console.log("pris 4", priceFourth);
      } else if (fourthPrice === "75-250 kr.") {
        priceFourth = newData2.filter((item) => item.price >= 75 && item.price <= 250);
      } else if (fourthPrice === "250-400 kr.") {
        priceFourth = newData2.filter((item) => item.price >= 250 && item.price <= 400);
      } else if (fourthPrice === "Over 400 kr.") {
        priceFourth = newData2.filter((item) => item.price >= 400);
      } else {
        priceFourth = [];
      }
    }
    //Udvælger første gave random med priceOne´s længde som max (priceOne er et array, hvor de valgte køn, kategori og pris er gældende). GiftOne er så den ønskede gave.
    giftOne = priceOne[Math.floor(Math.random() * priceOne.length)];
    console.log("gave1 er", giftOne);
    giftTwo = priceTwo[Math.floor(Math.random() * priceTwo.length)];
    console.log("Jeg har valgt", giftTwo);

    //Her tjekker vi om giftTwo er blevet det samme produkt som giftOne, og hvis ja, så smider vi giftOne´s produkt ud af priceTwo´s array og vælger giftTwo igen
    if (giftTwo.id === giftOne.id) {
      const newPriceTwo = priceTwo.filter((item) => item.id !== giftTwo.id);
      giftTwo = newPriceTwo[Math.floor(Math.random() * newPriceTwo.length)];
    }
    console.log("gave2 er", giftTwo);

    giftThree = priceThree[Math.floor(Math.random() * priceThree.length)];
    console.log("Jeg har valgt", giftThree);

    //Her tjekker vi om giftThree er blevet det samme produkt som giftOne eller two, og hvis ja, så smider vi giftOne´s/two´s produkt ud af priceThree´s array og vælger giftThree igen
    if (giftThree.id === giftOne.id || giftThree.id === giftTwo.id) {
      const newPriceThree = priceThree.filter((item) => item.id !== giftOne.id && item.id !== giftTwo.id);
      giftThree = newPriceThree[Math.floor(Math.random() * newPriceThree.length)];
    }
    console.log("gave3 er", giftThree);

    giftFourth = priceFourth[Math.floor(Math.random() * priceFourth.length)];
    console.log("Jeg har valgt", giftFourth);
    if (giftFourth.id === giftOne.id || giftFourth.id === giftTwo.id || giftFourth.id === giftThree.id) {
      const newPriceFourth = priceFourth.filter((item) => item.id !== giftOne.id && item.id !== giftTwo.id && item.id !== giftThree.id);
      giftFourth = newPriceFourth[Math.floor(Math.random() * newPriceFourth.length)];
    }
    console.log("gave4 er", giftFourth);
    return (
      <section>
        <h3>Her er dine udvalgte adventsgaver</h3>
        <div className="grid grid-cols-2">
          <ProductCard gift={giftOne} />
          <ProductCard gift={giftTwo} />
          <ProductCard gift={giftThree} />
          <ProductCard gift={giftFourth} />
        </div>
        <PrimaryButton
          text="Se resultater"
          action={() => {
            setVisible((o) => o + 1);
          }}
        />
      </section>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-gray-300">
      <QuizLayout currentStep={stepCount}>
        {visible === 1 && (
          <section>
            <h3>Hvilket køn har gavemodtageren?</h3>
            <RadioButton3 value1="kvinde" value2="mand" value3="neutral" text1="Kvinde" text2="Mand" text3="Andet" name="gender" onChange={setGender} />
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
            <RadioButton3 text1="Teenager" text2="20-40 år" text3="Voksen 40+ år" name="age" onChange={setAge} />
            <PrimaryButton
              text="Næste Step"
              action={() => {
                setVisible((o) => o + 1);
              }}
            />
          </section>
        )}
        {visible === 3 && (
          <section>
            <h3>Vælg én eller flere kategorier</h3>
            <form className="grid grid-cols-2 mb-10 pl-5">
              <CheckboxButton name="hudpleje" text="Hudpleje" onChange={setCategories} categories={categories} />
              <CheckboxButton name="makeup" text="Makeup" onChange={setCategories} categories={categories} />
              <CheckboxButton text="Hår" onChange={setCategories} categories={categories} />
              <CheckboxButton text="Parfumer" onChange={setCategories} categories={categories} />
              <CheckboxButton text="Negle" onChange={setCategories} categories={categories} />
              <CheckboxButton text="Skæg" onChange={setCategories} categories={categories} />
            </form>
            <PrimaryButton
              text="Næste Step"
              action={() => {
                setVisible((o) => o + 1);
              }}
            />
          </section>
        )}
        {visible === 4 && (
          <section>
            <h3>Kender du gavemodtagerens præferencer?</h3>
            <SquareRadioButtons showDetails={showDetails} onChange={setShowDetails}></SquareRadioButtons>
            <div className={showDetails === "show" ? "" : "hidden"}>
              <h4>Hvilken hudtype?</h4>
              <RadioButton5 text1="Normal" text2="Tør" text3="Sensitiv" text4="Kombineret" text5="Ved ikke" name=""></RadioButton5>
              <h4>Andre præferencer</h4>
              <form className="grid grid-cols-2 mb-10 pl-5">
                <CheckboxButton name="hudpleje" text="Allergivenlig" />
                <CheckboxButton name="makeup" text="Vegansk" />
                <CheckboxButton text="SPF" />
                <CheckboxButton text="Anti-age" />
                <CheckboxButton text="Svanemærket" />
                <CheckboxButton text="Økologisk" />
                <CheckboxButton text="Parfumefri" />
                <CheckboxButton text="Parabenefri" />
              </form>
            </div>
            <PrimaryButton
              text="Næste step"
              action={() => {
                setVisible((o) => o + 1);
                setStepCount((o) => o + 1);
              }}
            />
          </section>
        )}
        {visible === 5 && (
          <section>
            <h3>Hvad skal den 1. adventsgaven koste?</h3>
            <RadioButton5 text1="Under 75 kr." text2="75-250 kr." text3="250-400 kr." text4="Over 400 kr." text5="Spring 1. adventsgave over" name="first_gift" info="true" onChange={setFirstPrice} />
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
            <RadioButton5 text1="Under 75 kr." text2="75-250 kr." text3="250-400 kr." text4="Over 400 kr." text5="Spring 2. adventsgave over" name="second_gift" info="true" onChange={setSecondPrice} />
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
            <RadioButton5 text1="Under 75 kr." text2="75-250 kr." text3="250-400 kr." text4="Over 400 kr." text5="Spring 3. adventsgave over" name="second_gift" info="true" onChange={setThirdPrice} />
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
            <RadioButton5 text1="Under 75 kr." text2="75-250 kr." text3="250-400 kr." text4="Over 400 kr." text5="Spring 4. adventsgave over" name="second_gift" info="true" onChange={setFourthPrice} />
            <PrimaryButton
              text="Udvælg gaver"
              action={() => {
                // filtreData();
                console.log("GiftOne fra main", giftOne);
                setVisible((o) => o + 1);
                setStepCount((o) => o + 1);
              }}
            />
          </section>
        )}
        {/* && i denne situation betyder "hvis visible===9, så eksekvér filtreData()"  */}
        {visible === 9 && filtreData()}
      </QuizLayout>
    </main>
  );
}
