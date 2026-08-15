import Link from "next/link";

export function NavLink({
  href,
  children,
  active = false,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`font-serif text-[17px] transition-colors hover:text-[#e85d76] ${
        active ? "text-[#e85d76]" : "text-[#182132]"
      }`}
    >
      {children}
    </Link>
  );
}
