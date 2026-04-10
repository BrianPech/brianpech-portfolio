interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4";
}

export default function SectionHeading({
  children,
  className = "",
  as: Tag = "h2",
}: SectionHeadingProps) {
  const baseStyles = "font-headline font-bold text-white";

  const sizeMap = {
    h1: "text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05]",
    h2: "text-4xl leading-tight",
    h3: "text-2xl",
    h4: "text-xl",
  };

  return (
    <Tag className={`${baseStyles} ${sizeMap[Tag]} ${className}`}>
      {children}
    </Tag>
  );
}
