"use client";

type Product = {
  id: string; name: string; price: number; notes: string;
};

const ALL_PRODUCTS: Product[] = [
  { id: "1", name: "Yungas — Caturra", price: 12.9, notes: "Chocolate, manzana" },
  { id: "2", name: "Caranavi — Typica", price: 13.5, notes: "Caramelo, cítrico" },
];

export default function CoffeeCollectionsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-3xl font-bold text-amber-950 mb-6">Café</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {ALL_PRODUCTS.map(p => (
          <div key={p.id} className="rounded-xl border p-4">
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-sm text-zinc-600">{p.notes}</p>
            <p className="mt-1 font-bold text-amber-900">{p.price} €</p>
          </div>
        ))}
      </div>
    </div>
  );
}
