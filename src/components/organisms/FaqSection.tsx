import { FAQ_ITEMS } from "@/lib/constants";
import { SectionLabel, SectionHeading } from "@/components/atoms";
import { FaqCard } from "@/components/molecules";

export default function FaqSection() {
  return (
    <section className="mb-64">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Column — Header */}
        <div className="lg:col-span-4">
          <SectionLabel className="mb-4">Knowledge Base</SectionLabel>
          <SectionHeading>Preguntas Frecuentes</SectionHeading>
          <p className="text-on-surface-variant mt-6">
            Respuestas técnicas sobre soporte, personalización y transacciones.
          </p>
        </div>

        {/* Right Column — FAQ Items */}
        <div className="lg:col-span-8 space-y-6">
          {FAQ_ITEMS.map((item) => (
            <FaqCard key={item.question} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
