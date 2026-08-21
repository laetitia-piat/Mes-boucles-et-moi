import { AnnouncementBar } from "@/components/announcementBar";
import { Header } from "@/components/header";
import ProductDetails from "@/components/productDetails";
import { StorySection } from "@/components/storySection";
import { getProduct } from "@/lib/api/product";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function productDetailsPage({ params }: Props) {
  const { id } = await params;
  const product = await getProduct(Number(id));
  console.log("product", product);
  return (
    <main className="min-h-screen overflow-hidden text-[#182132]">
      <AnnouncementBar />
      <Header />
      <ProductDetails product={product} />
      <StorySection />
    </main>
  );
}
