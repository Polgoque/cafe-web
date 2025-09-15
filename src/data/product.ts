export type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  image?: string;
  origin: string;
  process: "Lavado" | "Honey" | "Natural";
  roast: "Claro" | "Medio" | "Oscuro";
  notes: string;
  defaultGrind: "Grano" | "Espresso" | "Filtro";
};

export const products: Product[] = [
  {
    id: "c1",
    name: "Yungas — Caturra",
    slug: "yungas-caturra",
    price: 12.9,
    image: "/vercel.svg", // placeholder
    origin: "Bolivia · Yungas",
    process: "Lavado",
    roast: "Medio",
    notes: "Chocolate con leche, azúcar moreno, manzana roja",
    defaultGrind: "Grano",
  },
  {
    id: "c2",
    name: "Caranavi — Typica",
    slug: "caranavi-typica",
    price: 13.5,
    image: "/vercel.svg",
    origin: "Bolivia · Caranavi",
    process: "Honey",
    roast: "Medio",
    notes: "Caramelo, cítrico dulce, nuez",
    defaultGrind: "Filtro",
  },
];
