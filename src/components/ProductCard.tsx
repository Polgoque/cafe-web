"use client";
import Image from "next/image";

type ProductCardProps = {
  name: string;
  description: string;
  price: string;
  image: string;
};

export default function ProductCard({
  name,
  description,
  price,
  image,
}: ProductCardProps) {
  return (
    <div
      className="max-w-xs bg-[#FFFCF7] rounded-2xl border border-[#E5DED6]
                 shadow-[0_6px_20px_rgba(0,0,0,0.06)] overflow-hidden
                 transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
    >
      {/* Imagen */}
      <div className="relative w-full h-64">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      {/* Contenido */}
      <div className="p-5 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-[#3D2C1D]">{name}</h3>
        <p className="text-sm text-[#6B5A4A]">{description}</p>
        <div className="mt-3 text-lg font-bold text-[#B8573B]">{price}</div>
      </div>
    </div>
  );
}

