import type { FaqItem as FaqItemType } from "@/lib/constants";

interface FaqCardProps {
  item: FaqItemType;
}

export default function FaqCard({ item }: FaqCardProps) {
  return (
    <div className="p-8 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors group">
      <h3 className="font-headline text-lg font-bold text-white mb-3">
        {item.question}
      </h3>
      <p className="text-zinc-400 text-sm leading-relaxed">{item.answer}</p>
    </div>
  );
}
