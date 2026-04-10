import {
  Navbar,
  HeroSection,
  ServicesSection,
  WorkflowStepper,
  CaseStudiesSection,
  TemplateStoreSection,
  FaqSection,
  CoreStackSection,
  ContactSection,
  Footer,
} from "@/components/organisms";
import { MainTemplate } from "@/components/templates";

export default function Home() {
  return (
    <>
      <Navbar />

      <MainTemplate>
        <HeroSection />
        <ServicesSection />
        <WorkflowStepper />
        <CaseStudiesSection />
        <TemplateStoreSection />
        <FaqSection />
        <CoreStackSection />
        <ContactSection />
      </MainTemplate>

      <Footer />
    </>
  );
}
