type BadgeVariant = "primary" | "neutral" | "scope" | "tech";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const VARIANT_STYLES: Record<BadgeVariant, string> = {
  primary: "bg-primary text-on-primary",
  neutral: "bg-surface-container-high text-white",
  scope: "text-primary bg-primary/5",
  tech: "bg-surface-container-high text-zinc-400",
};

export default function Badge({
  children,
  variant = "neutral",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`px-3 py-1 font-label text-[10px] uppercase tracking-widest rounded-full font-bold ${VARIANT_STYLES[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
