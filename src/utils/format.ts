export function formatEUR(n: number) {
return new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" }).format(n);
}