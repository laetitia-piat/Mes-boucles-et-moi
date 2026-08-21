"use client";
import { AnnouncementBar } from "@/components/announcementBar";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/heroSection";
import { StorySection } from "@/components/storySection";
import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import ContactInfo from "@/components/contactInfo";

export default function contactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "Impossible d'envoyer le message");
      }

      form.reset();
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen text-[#182132]">
      <AnnouncementBar />
      <Header />
      <HeroSection />
      <section className="relative z-10 mx-auto max-w-[1180px] px-5 py-10 md:px-8 lg:py-16">
        <h1 className="mb-12 text-center font-serif text-4xl italic text-[#b75b67] md:text-5xl">
          Contactez-moi ♡
        </h1>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Colonne gauche */}
          <div className="relative">
            <div className="max-w-[500px]">
              <p className="mb-12 text-lg leading-8 md:text-xl">
                Une question, une demande particulière
                <br />
                ou un projet de bijou personnalisé ?
                <br />
                Je suis là pour vous répondre avec plaisir.
              </p>

              <div className="space-y-8">
                <ContactInfo
                  icon={<Mail className="h-7 w-7" />}
                  title="Email"
                  content="bonjour@mesbouclesetmoi.fr"
                />

                {/*    <ContactInfo
                  icon={< className="h-7 w-7" />}
                  title="Instagram"
                  content="@mesbouclesetmoi"
                /> */}

                <ContactInfo
                  icon={<MapPin className="h-7 w-7" />}
                  title="Atelier"
                  content="Chartres, France"
                />
              </div>

              {/* Décoration */}
              <div className="mt-10 flex items-end gap-4">
                <div className="text-7xl leading-none">
                  <img
                    src="/images/flower.png"
                    alt="Fleur"
                    className="h-[200px]"
                  />
                </div>

                <div className="text-[110px] leading-none">
                  <img
                    src="/images/blackCat.png"
                    alt="Chat noir"
                    className="h-[200px]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="rounded-[28px] border border-[#f3d6cf] bg-[#fffaf7]/90 p-5 shadow-[0_12px_35px_rgba(223,104,128,0.08)] md:p-8">
            <form
              onSubmit={handleSubmit}
              className="mx-auto max-w-xl space-y-4"
            >
              <input
                name="name"
                placeholder="Votre nom"
                required
                className="w-full rounded-lg border p-3"
              />

              <input
                name="email"
                type="email"
                placeholder="Votre email"
                required
                className="w-full rounded-lg border p-3"
              />

              <textarea
                name="message"
                placeholder="Votre message"
                required
                rows={6}
                className="w-full rounded-lg border p-3"
              />

              <button
                type="submit"
                disabled={loading}
                className="rounded-lg bg-[#df6880] px-6 py-3 text-white"
              >
                {loading ? "Envoi..." : "Envoyer"}
              </button>

              {success && (
                <p className="text-center">Votre message a bien été envoyé ♡</p>
              )}
            </form>
          </div>
        </div>
      </section>

      <StorySection />
    </main>
  );
}
