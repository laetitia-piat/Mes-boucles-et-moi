import { AnnouncementBar } from "@/components/announcementBar";
import { Header } from "@/components/header";

export default function contactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fffdfb] text-[#182132]">
      <AnnouncementBar />
      <Header />
      <div className="mx-auto max-w-[1450px] py-10">
        <h1 className="text-center text-lg">Contactez-nous</h1>
        <p className="mt-4 text-center text-base">
          Pour toute question ou demande, n'hésitez pas à nous contacter à
          l'adresse suivante :
          <a
            href="mailto:contact@mesbouclesetmoi.com"
            className="text-blue-500 hover:underline"
          >
            contact@mesbouclesetmoi.com
          </a>
        </p>
      </div>
    </main>
  );
}
