import { Heart, Truck } from "lucide-react";

export function AnnouncementBar() {
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
