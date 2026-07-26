"use client";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-card-border bg-bg/55 px-[8vw] py-[22px] backdrop-blur-2xl">
      <div className="flex items-center gap-2 font-mono text-[15px] text-white">
        <span className="h-2 w-2 rounded-full bg-secondary shadow-[0_0_12px_theme(colors.secondary)]" />
        sadeepa.dev
      </div>
      <ul className="hidden gap-[34px] md:flex">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="group relative text-sm font-medium text-sub transition-colors hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-secondary transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>
      <a
        href="/Sadeepa_Dilshan.pdf"
        download="Sadeepa_Dilshan.pdf"
        className="rounded-lg border border-card-border bg-card px-[18px] py-[9px] font-mono text-[13px] text-white transition-all hover:border-secondary hover:shadow-[0_0_20px_rgba(0,245,255,0.2)]"
      >
        Download CV
      </a>
    </nav>
  );
}
