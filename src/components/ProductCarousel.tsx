"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // 👈 iconos
import ProductCard from "./ProductCard";

type Product = {
  name: string;
  description: string;
  price: string;
  image: string;
};

export default function ProductCarousel({ products }: { products: Product[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, clientWidth, scrollWidth } = el;
    setCanPrev(scrollLeft > 0);
    setCanNext(scrollLeft + clientWidth < scrollWidth - 1);
  };

  useEffect(() => {
    updateArrows();
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => updateArrows();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollByPage = (dir: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth;
    el.scrollBy({ left: dir === "next" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <div className="relative mx-auto max-w-7xl">
      {/* Flecha izquierda */}
      <button
        type="button"
        aria-label="Anterior"
        onClick={() => scrollByPage("prev")}
        disabled={!canPrev}
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 
        rounded-full bg-white p-2 shadow-md border border-zinc-200 
        hover:bg-[#C9A777] hover:text-white transition-colors
        ${canPrev ? "opacity-100" : "opacity-40 cursor-not-allowed"}`}
      >
        <ChevronLeft size={24} />
      </button>

      {/* Carrusel */}
      <div
        ref={trackRef}
        className="overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
      >
        <div className="flex gap-6 px-12">
          {products.map((p) => (
            <div
              key={p.name}
              className="snap-start shrink-0 w-[85%] sm:w-[48%] md:w-[48%] lg:w-[46%]"
            >
              <ProductCard {...p} />
            </div>
          ))}
        </div>
      </div>

      {/* Flecha derecha */}
      <button
        type="button"
        aria-label="Siguiente"
        onClick={() => scrollByPage("next")}
        disabled={!canNext}
        className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 
        rounded-full bg-white p-2 shadow-md border border-zinc-200 
        hover:bg-[#C9A777] hover:text-white transition-colors
        ${canNext ? "opacity-100" : "opacity-40 cursor-not-allowed"}`}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
