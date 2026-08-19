import Image from "next/image";

export function StorySection() {
  return (
    <section className="relative mt-2 overflow-hidden border-t border-[#efd8d2] bg-gradient-to-r from-[#f8ddd8] via-[#fff7f2] to-[#f8ded9]">
      <div className="mx-auto grid max-w-[1450px] items-center gap-3 px-4 py-4 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-10">
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

        <div>
          <img src="/images/bottomServices.png" alt="BottomService " />
        </div>
      </div>
    </section>
  );
}
