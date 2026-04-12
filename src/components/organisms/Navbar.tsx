import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { NavLink, IconButton } from "@/components/molecules";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-900/80 backdrop-blur-xl shadow-2xl shadow-blue-500/5">
      <div className="flex items-center justify-between px-8 py-4 max-w-full">
        {/* Logo */}
        <Link
          href="#"
          className="text-xl font-bold tracking-tighter text-white font-headline"
        >
          BRIAN PECH
        </Link>

        {/* Navigation Links — hidden on mobile */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map(({ href, label }) => (
            <NavLink key={href} href={href} label={label} />
          ))}
        </div>

        {/* Icon Buttons */}
        <div className="flex items-center gap-4">
          <IconButton icon="code" aria-label="View source code" />
          <IconButton icon="terminal" aria-label="Open terminal" />
        </div>
      </div>
    </nav>
  );
}
