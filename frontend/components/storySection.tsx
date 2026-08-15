import Image from "next/image";

type BottomServiceProps = {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export function StorySection({
  bottomServices,
}: {
  bottomServices: BottomServiceProps[];
}) {
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
