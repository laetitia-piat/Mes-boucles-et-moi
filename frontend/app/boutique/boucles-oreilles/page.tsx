import { AnnouncementBar } from "@/components/announcementBar";
import { BoutiqueCategories } from "@/components/boutiqueCategory";
import { Header } from "@/components/header";
import { ProductCard } from "@/components/productCard";

export default async function EarringsPage() {
  const response = await fetch("http://backend:8000/products/", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Impossible de récupérer les produits");
  }
  const products = await response.json();

  return (
    <main className="min-h-screen overflow-hidden bg-[#fffdfb] text-[#182132]">
      <AnnouncementBar />
      <Header />
      <BoutiqueCategories />
      <div className="max-w-[1320px] mx-auto grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product: any) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </main>
  );
}
