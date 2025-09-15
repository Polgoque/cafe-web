"use client";

export type Filters = {
  roast: "Todos" | "Claro" | "Medio" | "Oscuro";
  grind: "Todos" | "Grano" | "Espresso" | "Filtro";
  sort: "popular" | "price-asc" | "price-desc";
};

export const defaultFilters: Filters = {
  roast: "Todos",
  grind: "Todos",
  sort: "popular",
};

import type { Product } from "../data/products";

export function applyFiltersAndSort(products: Product[], f: Filters) {
  let out = products.filter((p) => {
    const roastOK = f.roast === "Todos" || p.roast === f.roast;
    const grindOK = f.grind === "Todos" || p.defaultGrind === f.grind;
    return roastOK && grindOK;
  });
  if (f.sort === "price-asc") out = [...out].sort((a, b) => a.price - b.price);
  if (f.sort === "price-desc") out = [...out].sort((a, b) => b.price - a.price);
  return out;
}

export default function FilterBar({
  filters,
  onChange,
  count,
}: {
  filters: Filters;
  onChange: (f: Filters) => void;
  count: number;
}) {
  return (
    <div className="mb-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-zinc-200 bg-white p-4 md:flex-row md:items-center">
      <div className="flex flex-wrap items-center gap-4">
        <label className="text-sm font-medium text-zinc-700">Tueste</label>
        <select
          className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm"
          value={filters.roast}
          onChange={(e) => onChange({ ...filters, roast: e.target.value as Filters["roast"] })}
        >
          {(["Todos", "Claro", "Medio", "Oscuro"] as const).map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>

        <label className="ml-2 text-sm font-medium text-zinc-700">Molienda</label>
        <select
          className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm"
          value={filters.grind}
          onChange={(e) => onChange({ ...filters, grind: e.target.value as Filters["grind"] })}
        >
          {(["Todos", "Grano", "Espresso", "Filtro"] as const).map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
      </div>

      <div className="flex w-full items-center justify-between gap-3 md:w-auto">
        <p className="text-sm text-zinc-600">
          <span className="font-semibold">{count}</span> productos
        </p>

        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-zinc-700">Ordenar</label>
          <select
            className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm"
            value={filters.sort}
            onChange={(e) => onChange({ ...filters, sort: e.target.value as Filters["sort"] })}
          >
            <option value="popular">Popular</option>
            <option value="price-asc">Precio: menor a mayor</option>
            <option value="price-desc">Precio: mayor a menor</option>
          </select>
        </div>
      </div>
    </div>
  );
}
