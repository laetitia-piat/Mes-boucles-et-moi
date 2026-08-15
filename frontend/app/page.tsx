import {
  Gift,
  Heart,
  PawPrint,
  PenLine,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";

import { Header } from "@/components/header";
import { AnnouncementBar } from "@/components/announcementBar";
import { CommitmentsSection } from "@/components/commitmentsSection";
import { CategoryCard } from "@/components/categoryCard";
import { HeroSection } from "@/components/heroSection";
import { StorySection } from "@/components/storySection";
import { ProductsSection } from "@/components/productSection";

const commitments = [
  {
    title: "Argent 925",
    description: "de qualité",
    icon: Sparkles,
  },
  {
    title: "Fait main",
    description: "avec passion",
    icon: Heart,
  },
  {
    title: "Personnalisation",
    description: "sur mesure",
    icon: PenLine,
  },
  {
    title: "Créations uniques",
    description: "en petites séries",
    icon: PawPrint,
  },
  {
    title: "Entreprise",
    description: "française",
    icon: ShieldCheck,
  },
];

const products = [
  {
    name: "Collier Initiale",
    price: "à partir de 24,00 €",
    image: "/images/product-necklace.png",
    //reviews: 23,
    slug: "collier-initiale",
  },
  {
    name: "Boucles Prénom",
    price: "à partir de 20,00 €",
    image: "/images/product_earrings.png",
    //reviews: 18,
    slug: "boucles-prenom",
  },
  {
    name: "Bracelet Initiale",
    price: "à partir de 18,00 €",
    image: "/images/product-bracelet.png",
    //reviews: 12,
    slug: "bracelet-initiale",
  },
  {
    name: "Collier Lune Étoilée",
    price: "à partir de 26,00 €",
    image: "/images/product-moon-necklace.jpg",
    //reviews: 31,
    slug: "collier-lune-etoilee",
  },
  {
    name: "Boucles Lune",
    price: "à partir de 22,00 €",
    image: "/images/product-moon-earrings.jpg",
    //reviews: 16,
    slug: "boucles-lune",
  },
  {
    name: "Porte-clé Initiale",
    price: "à partir de 12,00 €",
    image: "/images/product-keyring.jpg",
    //reviews: 9,
    slug: "porte-cle-initiale",
  },
];

const bottomServices = [
  {
    title: "Emballage soigné",
    description: "Prêt à offrir",
    icon: Gift,
  },
  {
    title: "Livraison rapide",
    description: "Suivie et sécurisée",
    icon: Truck,
  },
  {
    title: "Satisfaite ou remboursée",
    description: "14 jours pour changer d’avis",
    icon: ShieldCheck,
  },
];

type Category = {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
};

export default async function HomePage() {
  const response = await fetch("http://backend:8000/categories/", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Impossible de récupérer les catégories");
  }

  const categories: Category[] = await response.json();

  return (
    <main className="min-h-screen overflow-hidden bg-[#fffdfb] text-[#182132]">
      <AnnouncementBar />
      <Header />

      <HeroSection />

      <section className="relative z-20 -mt-1 px-4 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-[1450px] gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category) => (
            <CategoryCard key={category.name} {...category} />
          ))}
        </div>
      </section>

      <CommitmentsSection commitments={commitments} />
      <ProductsSection products={products} />
      <StorySection bottomServices={bottomServices} />
    </main>
  );
}
