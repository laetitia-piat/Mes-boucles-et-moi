import { PawPrint } from "lucide-react";
import { ProductCard } from "./productCard";
import Link from "next/link";
import { SectionTitle } from "./sectionTitle";

type Products = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  reviews: number;
  link: string;
  slug: string;
};

export async function ProductsSection() {
  const response = await fetch("http://backend:8000/products/", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Impossible de récupérer les produits");
  }

  const products: Products[] = await response.json();
  return (
    <section className="relative px-4 pb-2 pt-1 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1320px]">
        <SectionTitle title="Nos best-sellers" />

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="mt-4 text-center">
          <Link
            href="/boutique"
            className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#df6880] to-[#f2969b] px-8 py-3 font-serif uppercase tracking-wide text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Voir toute la boutique
            <PawPrint className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
