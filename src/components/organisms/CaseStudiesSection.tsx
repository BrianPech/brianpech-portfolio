import Image from "next/image";
import { SectionLabel, SectionHeading } from "@/components/atoms";
import { TechBadge } from "@/components/molecules";

export default function CaseStudiesSection() {
  return (
    <section className="mb-64" id="case-studies">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column — Text Content */}
        <div className="lg:col-span-5 space-y-8">
          <SectionLabel>Casos de Éxito</SectionLabel>

          <SectionHeading className="text-5xl tracking-tighter">
            Código premiado, resultados reales.
          </SectionHeading>

          <div className="p-8 rounded-lg bg-surface-container-lowest border border-outline-variant/5 space-y-4">
            <h3 className="font-headline text-2xl font-bold text-primary">
              Prototipos & Desarrollo de Software
            </h3>
            <p className="text-on-surface-variant">
              3er lugar estatal en el concurso de prototipos y desarrollo de
              software. 1er lugar en Hackatón de nivel medio superior.
              Participante a nivel nacional en competencias de desarrollo.
            </p>
            <div className="flex gap-4 pt-4">
              {["SUPABASE", "POSTGRESQL", "NEXT.JS"].map((tech) => (
                <TechBadge key={tech} label={tech} />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column — Image */}
        <div className="lg:col-span-7">
          <div className="aspect-video rounded-lg overflow-hidden relative group">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuClA7mcmg07i6IDfq41Y3KtJVVBe2IvyK_QBu5t9th43rW5GSe9xc1vL67omDLCuKE3sssNzbT1VkBWoWmaYy6_zhFdrus-p9lfnwtFM-oFOGpn2w3jxy23ap-qXv_TNe34AWRYM7lfpgtkjWxtVUUYRbEG59zTlN9rPxegAlWtootnuflRE0QkV49R3cZfcnq0OVxqrxq3gIL6GRL_NbfH71kuCGLleLaZ8J9_p2debuDAXBPM8mfw7w_rSeJiZQSeaR6SiYiqdto"
              alt="Technical Dashboard"
              fill
              loading="lazy"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
}
