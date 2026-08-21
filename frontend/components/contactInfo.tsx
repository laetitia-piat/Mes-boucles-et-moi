type ContactInfoProps = {
  icon: React.ReactNode;
  title: string;
  content: string;
};

export default function ContactInfo({
  icon,
  title,
  content,
}: ContactInfoProps) {
  return (
    <div className="flex items-center gap-5">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#f5d8d1] text-[#df6880]">
        {icon}
      </div>

      <div>
        <h2 className="font-serif text-xl font-semibold">{title}</h2>

        <p className="mt-1 text-lg text-[#53545a]">{content}</p>
      </div>
    </div>
  );
}
