import { SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-background w-full py-16 px-8 border-t border-zinc-800/50">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-8">
        {/* Brand */}
        <div className="text-lg font-black text-white font-headline">
          BRIAN PECH
        </div>

        {/* Social Links */}
        <div className="flex gap-8">
          {SOCIAL_LINKS.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              className="text-zinc-600 hover:text-blue-400 transition-colors font-body text-sm"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="font-label text-[10px] text-zinc-500 uppercase tracking-widest">
          © 2026 BRIAN PECH. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
