import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Gift,
  Heart,
  Menu,
  PawPrint,
  PenLine,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
  UserRound,
} from "lucide-react";

const categories = [
  {
    title: "Colliers",
    description: "Brillez avec élégance",
    image: "/images/category.png",
    href: "/boutique/colliers",
  },
  {
    title: "Boucles d’oreilles",
    description: "Légères et pleines de charme",
    image: "/images/category-earrings.png",
    href: "/boutique/boucles-oreilles",
  },
  {
    title: "Bracelets",
    description: "Délicats et raffinés",
    image: "/images/category-bracelet.jpg",
    href: "/boutique/bracelets",
  },
  {
    title: "Porte-clés",
    description: "Emportez votre magie",
    image: "/images/category-keyring.jpg",
    href: "/boutique/porte-cles",
  },
  {
    title: "Idées cadeaux",
    description: "Pour faire plaisir",
    image: "/images/category-gift.jpg",
    href: "/boutique/idees-cadeaux",
  },
];

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
    image: "/images/product-earrings.png",
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

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fffdfb] text-[#182132]">
      <AnnouncementBar />
      <Header />

      <HeroSection />

      <section className="relative z-20 -mt-1 px-4 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-[1450px] gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </section>

      <CommitmentsSection />
      <ProductsSection />
      <StorySection />
    </main>
  );
}

function AnnouncementBar() {
  return (
    <div className="border-b border-[#f0d9d3] bg-[#f9deda]">
      <div className="mx-auto flex min-h-10 max-w-[1450px] items-center justify-center px-4 text-xs sm:text-sm lg:justify-between">
        <div className="flex items-center gap-2">
          <Heart className="h-4 w-4 text-[#e85d76]" strokeWidth={1.7} />
          <span>Bijoux faits main en France</span>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Heart className="h-4 w-4 text-[#e85d76]" strokeWidth={1.7} />
          <span>Personnalisables avec amour</span>
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Truck className="h-4 w-4 text-[#e85d76]" strokeWidth={1.7} />
          <span>Livraison offerte dès 60 € d’achat</span>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="border-b border-[#efdcd5] bg-[#fffdfa]/95 backdrop-blur">
      <div className="mx-auto flex h-24 max-w-[1450px] items-center justify-between gap-6 px-4 sm:px-6 lg:px-10">
        <Link href="/" className="relative h-20 w-32 shrink-0">
          <Image
            src="/images/logo.png"
            alt="Mes Boucles et Moi"
            fill
            priority
            className="object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          <NavLink href="/" active>
            Accueil
          </NavLink>

          <NavLink href="/boutique">
            <span className="flex items-center gap-1">
              Boutique
              <ChevronDown className="h-4 w-4" />
            </span>
          </NavLink>

          <NavLink href="/personnalisation">Personnalisation</NavLink>
          <NavLink href="/a-propos">À propos</NavLink>
          <NavLink href="/journal">Journal</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>

        <div className="flex items-center gap-3 sm:gap-5">
          {/* <HeaderIcon label="Rechercher">
            <Search />
          </HeaderIcon>

          <HeaderIcon label="Mon compte" className="hidden sm:inline-flex">
            <UserRound />
          </HeaderIcon> */}

          <HeaderIcon
            label="Mes favoris"
            className="hidden sm:inline-flex"
            badge={0}
          >
            <Heart />
          </HeaderIcon>

          <HeaderIcon label="Mon panier" badge={0}>
            <ShoppingBag />
          </HeaderIcon>

          <button
            type="button"
            aria-label="Ouvrir le menu"
            className="inline-flex h-10 w-10 items-center justify-center lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
  active = false,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`font-serif text-[17px] transition-colors hover:text-[#e85d76] ${
        active ? "text-[#e85d76]" : "text-[#182132]"
      }`}
    >
      {children}
    </Link>
  );
}

function HeaderIcon({
  children,
  label,
  badge,
  className = "",
}: {
  children: React.ReactNode;
  label: string;
  badge?: number;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className={`relative h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-[#fce8e4] ${className}`}
    >
      <span className="[&>svg]:h-6 [&>svg]:w-6 [&>svg]:stroke-[1.4]">
        {children}
      </span>

      {badge !== undefined && (
        <span className="absolute right-0 top-0 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ea7185] px-1 text-[10px] text-white">
          {badge}
        </span>
      )}
    </button>
  );
}

function HeroSection() {
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

function DecorativeSparkles() {
  return (
    <>
      <Sparkles className="absolute left-[8%] top-10 h-7 w-7 text-[#e69728]" />
      <Sparkles className="absolute left-[17%] top-20 h-4 w-4 text-[#efa133]" />
      <Sparkles className="absolute left-[52%] top-8 h-8 w-8 text-[#e69728]" />
      <Sparkles className="absolute right-[8%] top-16 h-7 w-7 text-[#e69728]" />
      <Sparkles className="absolute bottom-20 right-[5%] h-4 w-4 text-[#e69728]" />
    </>
  );
}

function CategoryCard({
  title,
  description,
  image,
  href,
}: {
  title: string;
  description: string;
  image: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex min-h-[112px] overflow-hidden rounded-2xl border border-[#efd7cc] bg-[#fffaf6] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(91,57,42,0.1)]"
    >
      <div className="relative w-[42%] shrink-0 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col justify-center px-4 py-3">
        <h2 className="font-serif text-lg uppercase text-[#df4f6b]">{title}</h2>

        <p className="mt-2 flex items-start gap-1 text-xs text-[#333843]">
          <Sparkles className="mt-0.5 h-3 w-3 shrink-0 text-[#e89a27]" />
          {description}
        </p>

        <span className="mt-3 text-sm text-[#df4f6b] transition-transform group-hover:translate-x-1">
          → Découvrir
        </span>
      </div>
    </Link>
  );
}

function CommitmentsSection() {
  return (
    <section className="px-4 py-4 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-[1230px] grid-cols-2 gap-y-6 rounded-2xl border border-[#f1ded6] bg-[#fff8f5] px-5 py-5 sm:grid-cols-3 lg:grid-cols-5">
        {commitments.map(({ title, description, icon: Icon }, index) => (
          <div
            key={title}
            className={`relative flex items-center justify-center gap-3 px-2 ${
              index < commitments.length - 1
                ? "lg:after:absolute lg:after:right-0 lg:after:h-7 lg:after:w-px lg:after:bg-[#eacfc6]"
                : ""
            }`}
          >
            <Icon className="h-9 w-9 shrink-0 stroke-[1.3] text-[#182132]" />

            <div>
              <p className="font-serif text-xs uppercase">{title}</p>
              <p className="mt-1 text-xs">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProductsSection() {
  return (
    <section className="relative px-4 pb-2 pt-1 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1320px]">
        <SectionTitle title="Nos best-sellers" />

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {products.map((product) => (
            <ProductCard key={product.slug} {...product} />
          ))}
        </div>

        <div className="mt-4 text-center">
          <Link
            href="/boutique"
            className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#df6880] to-[#f2969b] px-8 py-3 font-serif uppercase tracking-wide text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Voir toute la boutique
            <PawPrint className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="mb-3 flex items-center justify-center gap-3">
      <span className="hidden h-px w-24 bg-[#efb9ba] sm:block" />
      <PawPrint className="h-5 w-5 fill-[#f4b1ba] text-[#f4b1ba]" />
      <h2 className="font-display text-3xl text-[#df5c75]">{title}</h2>
      <PawPrint className="h-5 w-5 fill-[#f4b1ba] text-[#f4b1ba]" />
      <span className="hidden h-px w-24 bg-[#efb9ba] sm:block" />
    </div>
  );
}

function ProductCard({
  name,
  price,
  image,
  //reviews,
  slug,
}: {
  name: string;
  price: string;
  image: string;
  //reviews: number;
  slug: string;
}) {
  return (
    <article className="group relative overflow-hidden rounded-lg border border-[#eeddd5] bg-[#fffaf7]">
      <span className="absolute left-0 top-2 z-10 bg-[#ea7e8d] px-2 py-1 text-[10px] text-white">
        Personnalisable
      </span>

      <button
        type="button"
        aria-label={`Ajouter ${name} aux favoris`}
        className="absolute right-2 top-2 z-10 rounded-full p-1 transition hover:bg-white"
      >
        <Heart className="h-4 w-4 stroke-[1.4] text-[#62554f]" />
      </button>

      <Link href={`/produit/${slug}`}>
        <div className="relative aspect-[1.08/1] overflow-hidden bg-[#f4ebe5]">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="px-3 py-3 text-center">
          <h3 className="font-serif text-sm">{name}</h3>
          <p className="mt-2 text-xs">{price}</p>

          {/*<div className="mt-1 flex items-center justify-center gap-1">
             <div className="flex">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className="h-3 w-3 fill-[#e79b12] text-[#e79b12]"
                />
              ))}
            </div>
             <span className="text-[10px] text-[#4a4644]">({reviews})</span> 
          </div> */}
        </div>
      </Link>
    </article>
  );
}

function StorySection() {
  return (
    <section className="relative mt-2 overflow-hidden border-t border-[#efd8d2] bg-gradient-to-r from-[#f8ddd8] via-[#fff7f2] to-[#f8ded9]">
      <div className="mx-auto grid max-w-[1450px] items-center gap-6 px-4 py-4 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-10">
        <div className="flex items-center gap-5">
          <div className="relative hidden h-24 w-32 shrink-0 sm:block">
            <Image
              src="/images/cat-moon.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          <div>
            <h2 className="font-script text-3xl text-[#df5c75] sm:text-4xl">
              Chaque bijou raconte votre histoire ♡
            </h2>

            <p className="mt-1 font-serif text-sm">
              Créations personnalisées faites avec soin pour des émotions
              uniques.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {bottomServices.map(({ title, description, icon: Icon }) => (
            <div key={title} className="flex items-center gap-3">
              <Icon className="h-9 w-9 shrink-0 stroke-[1.5] text-[#e85d76]" />

              <div>
                <h3 className="font-serif text-[11px] uppercase">{title}</h3>
                <p className="mt-1 text-[10px]">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
