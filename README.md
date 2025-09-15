import ProductCard from "@/components/ProductCard";
import type { Product } from "@/data/products";


export default function ProductGrid({ products }: { products: Product[] }) {
return (
<section className="pb-20">
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
{products.map((p) => (
<ProductCard key={p.id} product={p} />)
)}
</div>
</section>
);
}