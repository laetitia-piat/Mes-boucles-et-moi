import { AnnouncementBar } from "@/components/announcementBar";
import { BoutiqueCategories } from "@/components/boutiqueCategory";
import { Header } from "@/components/header";
import { ProductCard } from "@/components/productCard";
import { StorySection } from "@/components/storySection";
import { getProducts } from "@/lib/api/product";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  reviews: number;
  link: string;
  slug: string;
};

export default async function BoutiquePage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen overflow-hidden text-[#182132]">
      <AnnouncementBar />
      <Header />
      <BoutiqueCategories />
      <div className="max-w-[1320px] mx-auto grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product: Product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <StorySection />
    </main>
  );
}
