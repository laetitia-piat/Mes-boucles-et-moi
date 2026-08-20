import Link from "next/link";
import Image from "next/image";
import { Heart, Menu, ShoppingBag } from "lucide-react";
import { NavLink } from "./navLink";
import { HeaderIcon } from "./headerIcon";

export function Header() {
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
          <NavLink href="/">Accueil</NavLink>
          <NavLink href="/boutique">Boutique</NavLink>
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
