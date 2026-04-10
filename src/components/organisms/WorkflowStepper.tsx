import { WORKFLOW_STEPS } from "@/lib/constants";
import { SectionHeader } from "@/components/molecules";
import { Icon, Badge } from "@/components/atoms";

/**
 * WorkflowStepper — 100% Server Component (zero client JS).
 *
 * The step reveal animation uses CSS scroll-driven animations
 * (animation-timeline) defined in globals.css, so no IntersectionObserver
 * or useEffect is needed. This eliminates ~20KB of React client runtime
 * that was previously shipped for this component.
 *
 * The `.step-active` class is applied statically — the CSS handles
 * the visual transition via `animation-timeline: view()`.
 */
export default function WorkflowStepper() {
  return (
    <section className="mb-64 progress-line-container">
      <SectionHeader
        label="Workflow"
        title="Ingeniería por Etapas"
        centered
        className="mb-32"
      />

      <div className="max-w-3xl mx-auto relative px-4 md:px-0">
        {/* Vertical Timeline Track */}
        <div className="absolute left-6 md:left-1/2 md:-ml-px top-0 bottom-0 w-[2px] bg-outline-variant/20" />
        <div className="absolute left-6 md:left-1/2 md:-ml-px top-0 w-[2px] bg-primary progress-line-fill" />

        <div className="space-y-32 relative">
          {WORKFLOW_STEPS.map((step) => (
            <div
              key={step.number}
              className="step-item step-active flex flex-col md:flex-row items-start md:items-center group"
            >
              {/* Left Scope Badge — desktop only */}
              <div className="flex-1 md:text-right md:pr-16 hidden md:block">
                <Badge variant="scope">{step.scope}</Badge>
              </div>

              {/* Center Node */}
              <div className="relative z-10 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-surface-container-high step-node border border-outline-variant/20">
                <Icon
                  name={step.icon}
                  className="text-2xl md:text-3xl"
                />
              </div>

              {/* Right Content */}
              <div className="flex-1 pl-12 md:pl-16 mt-4 md:mt-0">
                {/* Scope Badge — mobile only */}
                <div className="md:hidden mb-2">
                  <Badge variant="scope">{step.scope}</Badge>
                </div>

                <h3 className="font-headline text-2xl font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed text-sm max-w-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
