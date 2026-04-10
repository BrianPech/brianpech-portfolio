import Image from "next/image";
import { Icon } from "@/components/atoms";
import type { TemplateItem } from "@/lib/constants";

interface TemplateCardProps {
  template: TemplateItem;
}

const BADGE_STYLES = {
  primary: "bg-primary text-on-primary",
  neutral: "bg-surface-container-high text-white",
} as const;

export default function TemplateCard({ template }: TemplateCardProps) {
  const { imageSrc, imageAlt, badge, badgeVariant, title, description, price } =
    template;

  return (
    <div className="bg-surface-container-low rounded-lg overflow-hidden group">
      {/* Image */}
      <div className="h-64 relative">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          loading="lazy"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 ${BADGE_STYLES[badgeVariant]} font-label text-[10px] rounded-full font-bold`}
          >
            {badge}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 space-y-4">
        <h3 className="font-headline text-xl font-bold text-white">{title}</h3>
        <p className="text-zinc-400 text-sm">{description}</p>

        <div className="flex items-center gap-4 pt-2">
          <a
            href="#"
            className="font-label text-[10px] uppercase tracking-widest text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
          >
            <Icon name="visibility" className="text-xs" /> Live Preview
          </a>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-outline-variant/10">
          <span className="font-headline text-2xl font-bold text-white">
            {price}
          </span>
          <button className="font-label text-xs uppercase tracking-widest text-primary flex items-center gap-2 group/btn">
            Purchase{" "}
            <Icon
              name="arrow_forward"
              className="text-sm group-hover/btn:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
