import { AnnouncementBar } from "@/components/announcementBar";
import { Header } from "@/components/header";
import { getProduct } from "@/lib/api/product";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function productDetailsPage({ params }: Props) {
  const { id } = await params;
  const product = await getProduct(Number(id));
  console.log("product", product);
  return (
    <main className="min-h-screen overflow-hidden bg-[#fffdfb] text-[#182132]">
      <AnnouncementBar />
      <Header />
      <div className="mx-auto max-w-[1450px] py-10">
        <p className="text-center text-lg">Détails du produit</p>
        <h1 className="text-center text-lg">{product.name}</h1>
      </div>
    </main>
  );
}
