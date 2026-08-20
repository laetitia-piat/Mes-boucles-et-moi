import { Heart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  reviews: number;
  link: string;
  slug: string;
};

export function ProductCard({
  name,
  price,
  image,
  reviews,
  slug,
}: ProductCardProps) {
  return (
    <article className="max-w-xs group relative overflow-hidden rounded-lg border border-[#eeddd5] bg-[#fffaf7]">
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
            className="object-contain transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="px-3 py-3 text-center">
          <h3 className="font-serif text-sm">{name}</h3>
          <p className="mt-2 text-xs">à partir de {price} €</p>

          <div className="mt-1 flex items-center justify-center gap-1">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className="h-3 w-3 fill-[#e79b12] text-[#e79b12]"
                />
              ))}
            </div>
            <span className="text-[10px] text-[#4a4644]">({reviews})</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
