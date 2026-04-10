interface TechBadgeProps {
  label: string;
}

export default function TechBadge({ label }: TechBadgeProps) {
  return (
    <span className="font-label text-[10px] px-3 py-1 rounded-sm bg-surface-container-high text-zinc-400">
      {label}
    </span>
  );
}
