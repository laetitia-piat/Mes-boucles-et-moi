"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({
  href,
  children,
  active = false,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`font-serif text-[17px] transition-colors hover:text-[#e85d76] ${
        isActive ? "text-[#e85d76]" : "text-[#182132]"
      }`}
    >
      {children}
    </Link>
  );
}
