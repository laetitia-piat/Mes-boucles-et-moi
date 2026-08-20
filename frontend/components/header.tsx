"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, Menu, X, ShoppingBag } from "lucide-react";
import { NavLink } from "./navLink";
import { HeaderIcon } from "./headerIcon";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="relative z-50 border-b border-[#efdcd5] bg-[#fffdfa]/95 backdrop-blur">
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
            <NavLink href="/panier">
              <ShoppingBag />
            </NavLink>
          </HeaderIcon>

          <button
            type="button"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex h-10 w-10 items-center justify-center lg:hidden"
          >
            {menuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        {menuOpen && (
          <nav className="absolute left-0 top-full z-[110] w-full border-t border-[#f3d9dd] bg-[#fffaf7] shadow-lg lg:hidden">
            <div className="flex flex-col items-center gap-1 px-6 py-5">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="w-full rounded-lg px-4 py-3 text-center transition hover:bg-[#fcebee]"
              >
                Accueil
              </Link>

              <Link
                href="/boutique"
                onClick={() => setMenuOpen(false)}
                className="w-full rounded-lg px-4 py-3 text-center transition hover:bg-[#fcebee]"
              >
                Boutique
              </Link>

              <Link
                href="/personnalisation"
                onClick={() => setMenuOpen(false)}
                className="w-full rounded-lg px-4 py-3 text-center transition hover:bg-[#fcebee]"
              >
                Personnalisation
              </Link>

              <Link
                href="/a-propos"
                onClick={() => setMenuOpen(false)}
                className="w-full rounded-lg px-4 py-3 text-center transition hover:bg-[#fcebee]"
              >
                À propos
              </Link>

              <Link
                href="/journal"
                onClick={() => setMenuOpen(false)}
                className="w-full rounded-lg px-4 py-3 text-center transition hover:bg-[#fcebee]"
              >
                Journal
              </Link>

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="w-full rounded-lg px-4 py-3 text-center transition hover:bg-[#fcebee]"
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
