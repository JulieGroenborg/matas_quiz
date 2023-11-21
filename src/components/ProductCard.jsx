import Image from "next/image";
export default function ProductCard({ productName, brandName, price, image }) {
  return (
    <article className="border-2 rounded-lg p-4 m-2">
      <Image src="https://images.matas.dk/trs/w730//Assets_v3/500001-600000/549001-550000/549601-549700/549698/product_v1_x2.jpg" width={500} height={500} alt="jjdk"></Image>
      <h4 className="font-semibold text-sm mt-2">{brandName}</h4>
      <h5 className="text-[#6A6A6A] font-medium text-xs">{productName}</h5>
      <p className="font-semibold mt-3">{price}</p>
    </article>
  );
}
