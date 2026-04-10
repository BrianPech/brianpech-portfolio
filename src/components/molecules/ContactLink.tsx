interface ContactLinkProps {
  href: string;
  icon: string;
  label: string;
}

export default function ContactLink({ href, icon, label }: ContactLinkProps) {
  return (
    <a
      href={href}
      className="flex items-center gap-4 text-white hover:text-primary transition-colors group"
    >
      <span className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center material-symbols-outlined text-primary group-hover:scale-110 transition-transform">
        {icon}
      </span>
      <span className="font-label text-sm uppercase tracking-widest">
        {label}
      </span>
    </a>
  );
}
