interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`font-label text-xs uppercase tracking-widest text-primary block ${className}`}
    >
      {children}
    </span>
  );
}
