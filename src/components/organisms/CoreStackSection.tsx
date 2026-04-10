import { TECH_STACK } from "@/lib/constants";
import { SectionHeading } from "@/components/atoms";
import { TechCell } from "@/components/molecules";

export default function CoreStackSection() {
  return (
    <section className="mb-64">
      {/* Section Header */}
      <div className="flex items-baseline gap-4 mb-12">
        <SectionHeading>Core Stack</SectionHeading>
        <div className="h-[1px] flex-grow bg-outline-variant/10" />
      </div>

      {/* Data Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-px bg-outline-variant/10 rounded-lg overflow-hidden border border-outline-variant/5">
        {TECH_STACK.map((tech) => (
          <TechCell key={tech.name} tech={tech} />
        ))}
      </div>
    </section>
  );
}
