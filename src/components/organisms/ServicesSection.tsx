import { SERVICES } from "@/lib/constants";
import { SectionHeader } from "@/components/molecules";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  return (
    <section className="mb-64" id="services">
      <SectionHeader
        label="Capacities"
        title="Servicios de ingeniería diseñados para precisión técnica."
        counter="01 / CAPABILITIES"
      />

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SERVICES.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  );
}
