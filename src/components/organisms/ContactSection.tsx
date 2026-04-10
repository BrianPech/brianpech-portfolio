import { SectionHeading, Button, InputField, TextArea } from "@/components/atoms";
import { ContactLink } from "@/components/molecules";

export default function ContactSection() {
  return (
    <section className="mb-64" id="contact">
      <div className="bg-surface-container-high rounded-lg p-12 md:p-24 relative overflow-hidden">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column — CTA */}
          <div className="space-y-8">
            <SectionHeading className="text-5xl tracking-tighter">
              ¿Listo para escalar?
            </SectionHeading>
            <p className="text-zinc-400 text-lg">
              Hablemos sobre cómo puedo transformar tus requerimientos técnicos
              en una ventaja competitiva real.
            </p>

            {/* Contact Links */}
            <div className="space-y-4">
              <ContactLink
                href="#"
                icon="send"
                label="Telegram Direct"
              />
              <ContactLink
                href="#"
                icon="chat"
                label="WhatsApp Business"
              />
            </div>
          </div>

          {/* Right Column — Form */}
          <form className="space-y-6">
            <InputField label="Nombre del Proyecto" type="text" />
            <InputField label="Correo Electrónico" type="email" />
            <TextArea label="Resumen Técnico" rows={4} />
            <Button variant="submit" type="submit">
              Enviar Propuesta
            </Button>
          </form>
        </div>

        {/* Artistic Glow Detail */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
      </div>
    </section>
  );
}
