import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative mb-10 overflow-hidden border-b border-[#efd8d2] bg-[radial-gradient(circle_at_center,#fffdfa_0%,#fff8f4_55%,#fceae7_100%)]">
      <div className="  mx-auto grid min-h-[430px] max-w-[1450px] items-center px-4 py-10 sm:px-6 lg:min-h-[350px] lg:grid-cols-2 lg:px-10">
        <Image
          src="/images/hero-background.png"
          alt="Mes Boucles et Moi"
          fill
          priority
          className="object-contain"
        />
        <Link
          href="/boutique"
          className="absolute bottom-1 left-1/3 -translate-x-1/2 rounded-lg bg-gradient-to-r from-[#df6880] to-[#f09a9d] px-6 py-3 text-white shadow-lg"
        >
          DÉCOUVRIR LA BOUTIQUE
        </Link>
      </div>
    </section>
  );
}
