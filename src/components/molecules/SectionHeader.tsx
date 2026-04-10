import { SectionLabel, SectionHeading } from "@/components/atoms";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  counter?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
  counter,
  centered = false,
  className = "",
}: SectionHeaderProps) {
  if (centered) {
    return (
      <div className={`text-center mb-16 ${className}`}>
        <SectionLabel className="mb-4">{label}</SectionLabel>
        <SectionHeading>{title}</SectionHeading>
        {description && (
          <p className="text-on-surface-variant mt-6">{description}</p>
        )}
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col md:flex-row items-end justify-between mb-16 gap-4 ${className}`}
    >
      <div className="max-w-xl">
        <SectionLabel className="mb-4">{label}</SectionLabel>
        <SectionHeading>{title}</SectionHeading>
        {description && (
          <p className="text-on-surface-variant mt-6">{description}</p>
        )}
      </div>
      {counter && (
        <div className="font-label text-[10px] uppercase tracking-tighter text-zinc-600">
          {counter}
        </div>
      )}
    </div>
  );
}
