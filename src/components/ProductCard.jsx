import Image from "next/image";
export default function ProductCard() {
  return (
    <article className="border-2 rounded-lg p-4 m-2">
      <Image src="https://images.matas.dk/trs/w730//encode/3614272761421_20231012141727.jpg" width={500} height={500} alt="Picture of the author"></Image>
      <h4 className="font-semibold text-sm mt-2">Valentino</h4>
      <h5 className="text-[#6A6A6A] font-medium text-xs">Donna Born in Roma Eau de Parfum</h5>
      <p className="font-semibold mt-3">624,95 kr.</p>
    </article>
  );
}
