import { socials } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative z-[1] flex flex-wrap items-center justify-between gap-3.5 border-t border-card-border px-[8vw] py-10">
      <p className="font-mono text-[13px] text-sub">© 2026 Sadeepa Dilshan</p>
      <div className="flex gap-5">
        <a
          href={socials.github}
          target="_blank"
          rel="noreferrer"
          className="text-[13px] text-sub transition-colors hover:text-secondary"
        >
          GitHub
        </a>
        <a
          href={socials.linkedin}
          target="_blank"
          rel="noreferrer"
          className="text-[13px] text-sub transition-colors hover:text-secondary"
        >
          LinkedIn
        </a>
        <a
          href={`mailto:${socials.email}`}
          className="text-[13px] text-sub transition-colors hover:text-secondary"
        >
          Email
        </a>
      </div>
      <p className="font-mono text-[13px] text-sub">Built with Next.js &amp; Tailwind CSS</p>
    </footer>
  );
}
