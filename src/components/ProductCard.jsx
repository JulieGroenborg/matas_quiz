import Image from "next/image";
export default function ProductCard({ gift }) {
  console.log("giftOne fra productcard", gift);
  return (
    <article className="border-2 rounded-lg p-4 m-2">
      <div className="grid place-items-center w-28 h-28 mr-auto ml-auto">
        <Image className="h-[100%] w-auto" src={gift.image} width={500} height={500} alt={gift.productname} priority={true}></Image>
      </div>
      <h4 className="font-semibold text-sm mt-2">{gift.brandname}</h4>
      <h5 className="text-[#6A6A6A] font-medium text-xs">{gift.productname}</h5>
      <p className="font-semibold mt-3">{gift.price} kr.</p>
    </article>
  );
}
