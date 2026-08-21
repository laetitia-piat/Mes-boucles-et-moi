import { Header } from "@/components/header";
import { AnnouncementBar } from "@/components/announcementBar";
import { CategoryCard } from "@/components/categoryCard";
import { HeroSection } from "@/components/heroSection";
import { StorySection } from "@/components/storySection";
import { ProductsSection } from "@/components/productSection";
import { getCategories } from "@/lib/api/category";

type Category = {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
};

export default async function HomePage() {
  const categories = await getCategories();

  return (
    <main className="min-h-screen overflow-hidden text-[#182132]">
      <AnnouncementBar />
      <Header />

      <HeroSection />

      <section className="relative z-20 -mt-1 px-4 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-[1450px] gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category: Category) => (
            <CategoryCard key={category.name} {...category} />
          ))}
        </div>
      </section>
      <section className="relative z-10 mt-5 px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1450px]">
          <img src="/images/banner.png" alt="Mes Boucles et Moi" />
        </div>
      </section>
      <ProductsSection />
      <StorySection />
    </main>
  );
}
