import { AnnouncementBar } from "@/components/announcementBar";
import { Header } from "@/components/header";

export default function aboutPage() {
  return (
    <main className="min-h-screen overflow-hidden text-[#182132]">
      <AnnouncementBar />
      <Header />
      <div className="mx-auto max-w-[1450px] py-10">
        <h1 className="text-center text-lg">À propos de Mes Boucles et Moi</h1>
        <p className="mt-4 text-center text-base">
          Bienvenue sur notre boutique en ligne ! Nous sommes passionnés par la
          création de bijoux uniques et élégants qui reflètent votre style
          personnel. Chaque pièce est soigneusement conçue avec des matériaux de
          qualité pour vous offrir des accessoires qui durent dans le temps.
        </p>
        <p className="mt-4 text-center text-base">
          Notre mission est de vous aider à exprimer votre individualité à
          travers nos collections de bijoux. Que vous recherchiez un collier
          délicat, une paire de boucles d'oreilles tendance ou un bracelet
          élégant, nous avons quelque chose pour chaque occasion. Explorez notre
          sélection et trouvez le bijou parfait pour compléter votre look.
        </p>
      </div>
    </main>
  );
}
