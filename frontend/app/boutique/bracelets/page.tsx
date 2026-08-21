import { AnnouncementBar } from "@/components/announcementBar";
import { BoutiqueCategories } from "@/components/boutiqueCategory";
import { Header } from "@/components/header";
import { ProductCard } from "@/components/productCard";
import { StorySection } from "@/components/storySection";
import { getProductsByCategory } from "@/lib/api/product";

export default async function BraceletsPage() {
  const products = await getProductsByCategory(3);

  return (
    <main className="min-h-screen overflow-hidden text-[#182132]">
      <AnnouncementBar />
      <Header />
      <BoutiqueCategories />
      <div className="max-w-[1320px] mx-auto grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product: any) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <StorySection />
    </main>
  );
}
