import ProductCard from "./ProductCard";
import type { Product } from "../data/product";

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <section className="pb-20">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard
  key={p.id}
  name={p.name}
  description={p.notes}
  price={`${p.price} €`} // si es number, lo puedes formatear aquí
  image={p.image}
/>
        ))}
      </div>
    </section>
  );
}
