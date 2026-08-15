import { LucideIcon } from "lucide-react";

type Commitment = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type CommitmentProps = {
  commitments: Commitment[];
};

export function CommitmentsSection({ commitments }: CommitmentProps) {
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
