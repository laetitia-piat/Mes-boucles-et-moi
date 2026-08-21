import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative z-0 mb-10 overflow-hidden ">
      <div className="relative mx-auto grid min-h-[150px] max-w-[1450px] items-center px-4 py-10 sm:px-6 lg:min-h-[350px] lg:grid-cols-2 lg:px-10">
        <Image
          src="/images/hero-background.png"
          alt="Mes Boucles et Moi"
          fill
          priority
          className="object-contain"
        />
        <Link
          href="/boutique"
          className="absolute bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-gradient-to-r from-[#df6880] to-[#f09a9d] px-4 py-2
          text-sm shadow-lg md:bottom-1 md:left-1/3 md:px-6 md:py-3 md:text-base"
        >
          DÉCOUVRIR LA BOUTIQUE
        </Link>
      </div>
    </section>
  );
}
