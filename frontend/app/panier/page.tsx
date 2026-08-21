import { AnnouncementBar } from "@/components/announcementBar";
import { Header } from "@/components/header";
import { StorySection } from "@/components/storySection";

export default function succesPage() {
  return (
    <main className="min-h-screen overflow-hidden text-[#182132]">
      <AnnouncementBar />
      <Header />
      <div className="mx-auto max-w-[1450px] py-10">
        <p className="text-center text-lg">Votre panier est vide.</p>
      </div>
      <StorySection />
    </main>
  );
}
