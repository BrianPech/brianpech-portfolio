import { TEMPLATES } from "@/lib/constants";
import { SectionLabel, Icon } from "@/components/atoms";
import { SectionHeader } from "@/components/molecules";
import TemplateCard from "./TemplateCard";

export default function TemplateStoreSection() {
  return (
    <section className="mb-64" id="templates">
      {/* Section Header */}
      <SectionHeader
        label=""
        title="Template Store"
        centered
      />
      <p className="text-zinc-500 font-label text-sm uppercase tracking-widest text-center -mt-12 mb-16">
        Ready to Deploy Solutions
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Template Cards */}
        {TEMPLATES.map((template) => (
          <TemplateCard key={template.title} template={template} />
        ))}

        {/* Methodology Inset Card */}
        <div className="bg-surface-container-high rounded-lg p-8 flex flex-col justify-center space-y-8">
          <SectionLabel>Methodology</SectionLabel>

          <h3 className="font-headline text-3xl font-bold text-white tracking-tight">
            Clean Architecture &amp; Git Flow.
          </h3>

          <p className="text-on-surface-variant text-sm leading-relaxed">
            Arquitectura limpia con Git Flow para código mantenible y
            profesional. Cada sistema está diseñado para rendimiento,
            escalabilidad y despliegues sin fricción.
          </p>

          <div className="flex items-center gap-3 text-white font-label text-xs">
            <Icon
              name="workspace_premium"
              filled
              className="text-primary"
            />
            1er Lugar — Hackatón Nivel Medio Superior
          </div>
        </div>
      </div>
    </section>
  );
}
