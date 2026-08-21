"use client";
import { AnnouncementBar } from "@/components/announcementBar";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/heroSection";
import { useState } from "react";

export default function contactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      e.currentTarget.reset();
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#fffdfb] text-[#182132]">
      <AnnouncementBar />
      <Header />
      <HeroSection />
      <div className="mx-auto max-w-[1450px] py-10">
        <form onSubmit={handleSubmit} className="mx-auto max-w-xl space-y-4">
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
    </main>
  );
}
