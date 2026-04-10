import { SectionLabel, Button } from "@/components/atoms";

export default function HeroSection() {
  return (
    <section className="min-h-[819px] flex flex-col justify-center max-w-5xl mb-64">
      <div className="space-y-4 mb-12">
        <SectionLabel className="tracking-[0.25em]">
          Full-Stack Software Engineer
        </SectionLabel>

        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] text-white">
          Brian Pech — Ingeniería de Software que Escala
        </h1>

        <p className="text-xl md:text-2xl text-on-surface-variant font-body max-w-2xl pt-6">
          Desarrollo aplicaciones web escalables y de alto rendimiento con
          Next.js, Supabase y TypeScript. Obsesionado con la velocidad,
          la arquitectura limpia y las soluciones modernas.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-6">
        <Button variant="primary">Hablemos de tu Proyecto</Button>
        <Button variant="ghost">Ver Catálogo de Templates</Button>
      </div>
    </section>
  );
}
