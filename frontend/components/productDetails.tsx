"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ChevronDown,
  Diamond,
  HeartHandshake,
  Minus,
  Plus,
  ShoppingBag,
  Truck,
} from "lucide-react";

type Product = {
  id: number;
  name: string;
  description?: string | null;
  price: number;
  stock: number;
  image?: string | null;
  customizable?: boolean;
  reviews?: number;
  category_id?: number;
};

type Props = {
  product: Product;
};

const colors = [
  { name: "Violet", value: "#6652a3" },
  { name: "Rose", value: "#df6880" },
  { name: "Bleu", value: "#005bad" },
  { name: "Blanc", value: "#fafafa" },
];

export default function ProductDetails({ product }: Props) {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(colors[0].value);
  const [material, setMaterial] = useState("Argent 925");
  const [personalization, setPersonalization] = useState("");
  const [chain, setChain] = useState("45 cm (standard)");

  const image = product.image || "/images/product_moonNecklace.png";

  function decreaseQuantity() {
    setQuantity((prev) => Math.max(1, prev - 1));
  }

  function increaseQuantity() {
    setQuantity((prev) => prev + 1);
  }

  return (
    <main className="min-h-screen px-4 py-6 text-[#31343b] sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1450px]">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs text-[#777]">
          <Link href="/" className="hover:text-[#df6880]">
            Accueil
          </Link>

          <span>›</span>

          <Link href="/boutique" className="hover:text-[#df6880]">
            Boutique
          </Link>

          <span>›</span>

          <span>{product.name}</span>
        </div>

        {/* Partie principale */}
        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.8fr] xl:gap-10">
          {/* ==================== */}
          {/* GALERIE */}
          {/* ==================== */}
          <section className="flex gap-4">
            {/* Miniatures */}
            <div className="hidden w-[70px] shrink-0 flex-col gap-3 sm:flex">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <button
                  key={item}
                  type="button"
                  className="relative aspect-square overflow-hidden rounded-md border border-[#eadbd5] bg-white transition hover:border-[#df6880]"
                >
                  <Image
                    src={image}
                    alt={`${product.name} vue ${item}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Grande image */}
            <div className="relative w-[80%] overflow-hidden rounded-md bg-[#f7f0ea]">
              {product.customizable && (
                <span className="absolute left-3 top-3 z-10 rounded-sm bg-[#df6880] px-3 py-1 text-xs font-medium text-white">
                  Personnalisable
                </span>
              )}

              <Image
                src={image}
                alt={product.name}
                fill
                priority
                className="object-contain"
              />
            </div>
          </section>

          {/* ==================== */}
          {/* INFORMATIONS */}
          {/* ==================== */}
          <section>
            <h1 className="font-serif text-3xl italic lg:text-4xl">
              {product.name}
            </h1>

            <p className="mt-1 text-3xl font-semibold text-[#df6880]">
              {Number(product.price).toFixed(2).replace(".", ",")} €
            </p>

            {product.description && (
              <p className="mt-4 max-w-md text-sm leading-6 text-[#595b61]">
                {product.description}
              </p>
            )}

            {/* Couleur */}
            <div className="mt-6">
              <p className="mb-2 text-sm font-medium">Couleur</p>

              <div className="flex gap-2">
                {colors.map((color) => (
                  <button
                    key={color.value}
                    type="button"
                    aria-label={color.name}
                    title={color.name}
                    onClick={() => setSelectedColor(color.value)}
                    className={`h-8 w-8 rounded-full border-2 transition ${
                      selectedColor === color.value
                        ? "scale-110 border-[#555]"
                        : "border-[#ddd]"
                    }`}
                    style={{
                      backgroundColor: color.value,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Matière */}
            <div className="mt-6">
              <label className="mb-2 block text-sm font-medium">Matière</label>

              <select
                value={material}
                onChange={(e) => setMaterial(e.target.value)}
                className="w-full rounded-md border border-[#eadbd5] bg-transparent px-4 py-3 outline-none focus:border-[#df6880]"
              >
                <option>Argent 925</option>
                <option>Plaqué or</option>
                <option>Acier inoxydable</option>
              </select>
            </div>

            {/* Personnalisation */}
            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium">
                Personnalisation{" "}
                <span className="font-normal text-[#999]">(optionnelle)</span>
              </label>

              <select
                value={personalization}
                onChange={(e) => setPersonalization(e.target.value)}
                className="w-full rounded-md border border-[#eadbd5] bg-transparent px-4 py-3 outline-none focus:border-[#df6880]"
              >
                <option value="">Aucune personnalisation</option>
                <option value="initiale">Ajouter une initiale</option>
                <option value="prenom">Ajouter un prénom</option>
                <option value="date">Ajouter une date</option>
              </select>
            </div>

            {/* Chaîne */}
            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium">Chaîne</label>

              <select
                value={chain}
                onChange={(e) => setChain(e.target.value)}
                className="w-full rounded-md border border-[#eadbd5] bg-transparent px-4 py-3 outline-none focus:border-[#df6880]"
              >
                <option>40 cm</option>
                <option>45 cm (standard)</option>
                <option>50 cm</option>
                <option>55 cm</option>
              </select>
            </div>

            {/* Quantité */}
            <div className="mt-5">
              <p className="mb-2 text-sm font-medium">Quantité</p>

              <div className="flex h-11 w-[140px] items-center rounded-md border border-[#eadbd5]">
                <button
                  type="button"
                  onClick={decreaseQuantity}
                  className="flex h-full flex-1 items-center justify-center"
                >
                  <Minus className="h-4 w-4" />
                </button>

                <span className="flex-1 text-center">{quantity}</span>

                <button
                  type="button"
                  onClick={increaseQuantity}
                  className="flex h-full flex-1 items-center justify-center"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Ajouter panier */}
            <button
              type="button"
              className="mt-6 flex w-full items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-[#df6880] to-[#f09a9d] px-6 py-4 font-medium text-white shadow-md transition hover:opacity-90"
            >
              AJOUTER AU PANIER
              <ShoppingBag className="h-5 w-5" />
            </button>

            {/* Arguments */}
            <div className="mt-8 grid grid-cols-3 gap-3 border-b border-[#eadbd5] pb-7 text-center text-xs">
              <Benefit
                icon={<Diamond />}
                text={
                  <>
                    Argent 925
                    <br />
                    de qualité
                  </>
                }
              />

              <Benefit
                icon={<HeartHandshake />}
                text={
                  <>
                    Fait main
                    <br />
                    avec amour
                  </>
                }
              />

              <Benefit
                icon={<Truck />}
                text={
                  <>
                    Livraison offerte
                    <br />
                    dès 60€ d'achat
                  </>
                }
              />
            </div>

            {/* Accordéons */}
            <div className="mt-6">
              <Accordion
                title="DESCRIPTION"
                content={
                  product.description ||
                  "Un bijou délicat imaginé et confectionné avec soin dans notre atelier."
                }
              />

              <Accordion
                title="LIVRAISON & RETOURS"
                content="Votre commande est préparée avec soin puis expédiée sous quelques jours ouvrés. Les retours sont possibles selon nos conditions."
              />

              <Accordion
                title="ENTRETIEN"
                content="Évitez le contact prolongé avec l'eau, les parfums et les produits chimiques. Rangez votre bijou à l'abri de l'humidité."
              />

              <Accordion
                title={`AVIS CLIENTS (${product.reviews ?? 0})`}
                right={
                  <span className="tracking-wider text-[#f5a623]">★★★★★</span>
                }
                content="Les avis clients apparaîtront ici."
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function Benefit({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="text-[#6e7476] [&_svg]:h-7 [&_svg]:w-7">{icon}</div>

      <p className="leading-5">{text}</p>
    </div>
  );
}

function Accordion({
  title,
  content,
  right,
}: {
  title: string;
  content: string;
  right?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#eadbd5]">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 text-left text-sm font-medium"
      >
        <div className="flex items-center gap-3">
          <span>{title}</span>
          {right}
        </div>

        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <p className="pb-5 pr-10 text-sm leading-6 text-[#666]">{content}</p>
      )}
    </div>
  );
}
