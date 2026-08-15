import { PawPrint } from "lucide-react";

export function SectionTitle({ title }: { title: string }) {
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
