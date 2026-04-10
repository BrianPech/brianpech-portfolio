/* ===== Type Definitions ===== */

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  tag: string;
  variant: "high" | "low";
}

export interface WorkflowStep {
  number: string;
  icon: string;
  scope: string;
  title: string;
  description: string;
}

export interface TemplateItem {
  imageSrc: string;
  imageAlt: string;
  badge: string;
  badgeVariant: "primary" | "neutral";
  title: string;
  description: string;
  price: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TechStackItem {
  category: string;
  name: string;
  version: string;
}

/* ===== Navigation Links ===== */

export const NAV_LINKS = [
  { href: "#services", label: "Servicios" },
  { href: "#case-studies", label: "Proyectos" },
  { href: "#templates", label: "Templates" },
  { href: "#contact", label: "Contacto" },
] as const;

/* ===== Services ===== */

export const SERVICES: ServiceItem[] = [
  {
    icon: "web",
    title: "Desarrollo Web Full-Stack",
    description:
      "Aplicaciones web escalables y de alto rendimiento con Next.js, React y TypeScript. Optimización para SEO y Core Web Vitals.",
    tag: "PERFORMANCE FIRST",
    variant: "high",
  },
  {
    icon: "database",
    title: "Backend & Bases de Datos",
    description:
      "Arquitecturas robustas con Supabase, Firebase y PostgreSQL. Sincronización en tiempo real, autenticación segura y APIs escalables.",
    tag: "REAL-TIME DATA",
    variant: "low",
  },
  {
    icon: "devices",
    title: "Software Multiplataforma",
    description:
      "Desarrollo de soluciones que funcionan en múltiples plataformas con código limpio, mantenible y arquitectura modular.",
    tag: "CROSS-PLATFORM",
    variant: "high",
  },
];

/* ===== Workflow Steps ===== */

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    number: "01",
    icon: "search",
    scope: "scope: full-analysis",
    title: "01. Descubrimiento",
    description:
      "Auditoría de requerimientos y definición de arquitectura de datos. Mapeo de procesos críticos del negocio para diseñar la solución óptima.",
  },
  {
    number: "02",
    icon: "code",
    scope: "env: production-ready",
    title: "02. Desarrollo",
    description:
      "Construcción iterativa con Next.js, React y tipado estricto con TypeScript. Implementación de lógica de negocio con arquitectura limpia y Git Flow.",
  },
  {
    number: "03",
    icon: "rocket_launch",
    scope: "status: deployed",
    title: "03. Despliegue",
    description:
      "Optimización en el Edge, CI/CD y monitoreo de rendimiento. Despliegue automatizado con alta disponibilidad y bases de datos en tiempo real.",
  },
];

/* ===== Templates ===== */

export const TEMPLATES: TemplateItem[] = [
  {
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDW-UJSHeNtUtDmQRomCIbl0I0u_-yPvkJkJJlalzClK9YrX6AXgEYCBlc51fP3jZhuL6WupGRpdKtce-JrVuB0sF37sA-BVZQnZ5s-kGiFyue6MdYhi3KD8dlQa1RTfu66WVCcPSDv9fOobmOcB0z0Q2hAyZKNL6vIxke9FAKI5orn1HtpAAj6jagNfCJxteQ-6MsDGUUDoQoQ8G_RVu9a39xUWJaOKrHV_CpwMgcVNIM7jUSqicbD4ZhT5BsiTUI-uRDPsuQknYQ",
    imageAlt: "SaaS Template",
    badge: "BEST SELLER",
    badgeVariant: "primary",
    title: "Hyper-SaaS Starter",
    description:
      "Full-stack template con autenticación, dashboards y pagos lista para producción.",
    price: "$79.00",
  },
  {
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC0Wll989Ic-eH8j_guJEteq5RauN45tCiGWvlr8Rq4s8uunNU1uRpgK3ufxnU9-aeH0UJhUoeakDJLZ3j19R7p8xkdF1dwMBB2dT2Q4XEKWenadbF70fi2aTJhVgOyB379IleZR8lL7uX6np6cUI8r_iRLdkykTpbjSzMCXL0D0xrK7slehoTU142qZ21sEz07bfNL6OX0tzgYtWVXY8lnK-9FHZB9JEgEbk5pcvEWgRqj3gPQPHrUY1u1lao7qjm46GYiVcLB-xM",
    imageAlt: "E-commerce Template",
    badge: "READY TO DEPLOY",
    badgeVariant: "neutral",
    title: "Monolith Commerce",
    description:
      "E-commerce de alto rendimiento con Next.js y base de datos en tiempo real.",
    price: "$129.00",
  },
];

/* ===== FAQ ===== */

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "¿Cuál es tu stack tecnológico principal?",
    answer:
      "Mi stack principal incluye Next.js y React con Tailwind CSS en el frontend, Supabase, Firebase y PostgreSQL para backend y bases de datos, y TypeScript y JavaScript como lenguajes principales. También tengo experiencia con Java.",
  },
  {
    question: "¿Cómo es tu proceso de desarrollo?",
    answer:
      "Sigo una metodología organizada con Git Flow para asegurar que cada línea de código sea mantenible y profesional. Mi enfoque está en el rendimiento, la arquitectura limpia y las soluciones modernas con bases de datos en tiempo real.",
  },
  {
    question: "¿Qué tipo de proyectos desarrollas?",
    answer:
      "Desarrollo aplicaciones web escalables y de alto rendimiento: desde plataformas SaaS hasta sistemas de gestión, e-commerce y aplicaciones con autenticación robusta y sincronización en tiempo real.",
  },
];

/* ===== Tech Stack ===== */

export const TECH_STACK: TechStackItem[] = [
  { category: "Frontend", name: "Next.js", version: "REACT" },
  { category: "Styling", name: "Tailwind", version: "CSS" },
  { category: "Backend", name: "Supabase", version: "REAL-TIME" },
  { category: "Database", name: "PostgreSQL", version: "FIREBASE" },
  { category: "Lenguajes", name: "TypeScript", version: "JAVA" },
  { category: "Cloud", name: "Vercel", version: "EDGE" },
];

/* ===== Social Links ===== */

export const SOCIAL_LINKS = [
  { href: "https://linkedin.com/in/brianpech", label: "LinkedIn" },
  { href: "https://github.com/brianpech", label: "GitHub" },
] as const;
