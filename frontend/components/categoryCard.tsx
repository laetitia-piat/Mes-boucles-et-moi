import Link from "next/link";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export function CategoryCard({
  name,
  description,
  image,
  link,
}: {
  name: string;
  description: string;
  image: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      className="group flex min-h-[112px] overflow-hidden rounded-2xl border border-[#efd7cc] bg-[#fffaf6] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(91,57,42,0.1)]"
    >
      <div className="relative w-[42%] shrink-0 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col justify-center px-4 py-3">
        <h2 className="font-serif text-lg uppercase text-[#df4f6b]">{name}</h2>

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
