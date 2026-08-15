export function HeaderIcon({
  children,
  label,
  badge,
  className = "",
}: {
  children: React.ReactNode;
  label: string;
  badge?: number;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className={`relative h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-[#fce8e4] ${className}`}
    >
      <span className="[&>svg]:h-6 [&>svg]:w-6 [&>svg]:stroke-[1.4]">
        {children}
      </span>

      {badge !== undefined && (
        <span className="absolute right-0 top-0 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ea7185] px-1 text-[10px] text-white">
          {badge}
        </span>
      )}
    </button>
  );
}
