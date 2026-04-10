interface NavLinkProps {
  href: string;
  label: string;
}

export default function NavLink({ href, label }: NavLinkProps) {
  return (
    <a
      href={href}
      className="text-zinc-400 hover:text-white transition-colors font-medium uppercase tracking-widest text-xs font-label"
    >
      {label}
    </a>
  );
}
