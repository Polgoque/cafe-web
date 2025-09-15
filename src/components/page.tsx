import Link from "next/link";


export default function Home() {
return (
<section className="relative isolate overflow-hidden bg-amber-50">
<div className="mx-auto max-w-6xl px-4 py-28 text-center">
<h1 className="text-4xl md:text-6xl font-bold tracking-tight text-amber-950">Café boliviano en Barcelona</h1>
<p className="mx-auto mt-6 max-w-2xl text-lg text-amber-800">
Directo del productor al barista. Tueste fresco, perfil de taza transparente.
</p>
<div className="mt-10 flex items-center justify-center gap-4">
<Link href="/coffee" className="rounded-xl bg-amber-900 px-6 py-3 text-white shadow hover:bg-amber-800 transition">Ver cafés</Link>
<Link href="/about" className="rounded-xl border border-amber-900 px-6 py-3 text-amber-900 hover:bg-white transition">Nuestra historia</Link>
</div>
</div>
</section>
);
}
"use client";


import { useMemo, useState } from "react";
import { products as ALL_PRODUCTS, type Product } from "@/data/products";
import ProductGrid from "@/components/ProductGrid";
import FilterBar, { type Filters, defaultFilters, applyFiltersAndSort } from "@/components/FilterBar";


export default function CoffeeCollectionsPage() {
const [filters, setFilters] = useState<Filters>(defaultFilters);


const filtered = useMemo(() => applyFiltersAndSort(ALL_PRODUCTS, filters), [filters]);


return (
<div className="mx-auto max-w-7xl px-4">
<header className="flex flex-col gap-3 py-10 md:flex-row md:items-end md:justify-between">
<div>
<h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-amber-950">Café</h1>
<p className="mt-2 text-amber-800">Granos de origen único, tostados en Barcelona. Elige tu perfil y formato.</p>
</div>
</header>
<FilterBar filters={filters} onChange={setFilters} count={filtered.length} />
<ProductGrid products={filtered} />
</div>
);
}


---


// FILE: src/components/Navbar.tsx
import Link from "next/link";


export default function Navbar() {
return (
<div className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
<nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
<Link href="/" className="text-xl font-black tracking-tight text-amber-950">BOLI BCN</Link>
<div className="hidden gap-6 md:flex">
<Link href="/coffee" className="hover:text-amber-900">Café</Link>
<Link href="/about" className="hover:text-amber-900">Origen</Link>
<Link href="/contact" className="hover:text-amber-900">Contacto</Link>
</div>
</nav>
</div>
);
}