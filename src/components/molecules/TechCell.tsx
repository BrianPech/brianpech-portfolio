import type { TechStackItem } from "@/lib/constants";

interface TechCellProps {
  tech: TechStackItem;
}

export default function TechCell({ tech }: TechCellProps) {
  return (
    <div className="bg-surface p-8 space-y-2">
      <p className="font-label text-[10px] uppercase text-zinc-500">
        {tech.category}
      </p>
      <p className="font-headline text-lg font-bold text-white">{tech.name}</p>
      <div className="text-[10px] font-label text-primary">{tech.version}</div>
    </div>
  );
}
