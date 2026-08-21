import { getCategories } from "@/lib/api/category";
import Image from "next/image";
import Link from "next/link";

type Category = {
  id: number;
  name: string;
  image: string;
  link: string;
};

export async function BoutiqueCategories() {
  const categories = await getCategories();
  return (
    <section className=" px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-7 text-center">
          <h2 className="font-script text-4xl text-[#30384a]">
            Notre boutique
          </h2>

          <p className="mt-1 font-serif text-xs text-[#6f7180] sm:text-sm">
            Découvrez toutes nos créations faites main avec amour.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-x-4 gap-y-5 sm:grid-cols-5">
          {categories.map((category: Category) => (
            <Link
              key={category.name}
              href={category.link}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-[#efcdbf] bg-[#fffdfb] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-md sm:h-20 sm:w-20">
                <div className="relative h-10 w-10 sm:h-12 sm:w-12">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <span className="mt-2 font-serif text-xs text-[#333846] sm:text-sm">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
