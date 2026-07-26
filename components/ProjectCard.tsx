import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <Reveal delay={delay}>
      <motion.div
        className="flex h-full flex-col rounded-2xl border border-card-border bg-card p-[30px] backdrop-blur-md transition-all hover:-translate-y-1.5 hover:border-accent hover:shadow-[0_20px_50px_-20px_rgba(124,58,237,0.45)]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65, ease: [0.2, 0.8, 0.2, 1] }}
        whileHover={{ y: -4 }}
      >
        <div className="mb-4 flex items-start justify-between">
          <div>
            <div className="font-display text-[22px] font-semibold">{project.name}</div>
            <div className="mt-1 font-mono text-[13px] text-secondary">{project.tagline}</div>
          </div>
          <div className="font-mono text-xs text-sub">{project.num}</div>
        </div>

        <p className="mb-[18px] mt-3.5 flex-grow text-[14.5px] leading-[1.7] text-sub">
          {project.desc}
        </p>

        <div className="mb-[18px] flex flex-wrap gap-2">
          {project.features.map((f) => (
            <span key={f} className="rounded-md bg-white/[0.04] px-2.5 py-1.5 text-xs text-sub">
              {f}
            </span>
          ))}
        </div>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-accent/35 px-2.5 py-1 font-mono text-[11.5px] text-accent"
            >
              {t}
            </span>
          ))}
        </div>

        {(project.team || project.duration) && (
          <div className="mb-5 flex gap-[18px] font-mono text-xs text-sub">
            {project.team && <span>Team: {project.team}</span>}
            {project.duration && <span>Duration: {project.duration}</span>}
          </div>
        )}

        <div className="mt-auto flex gap-2.5">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-card-border bg-white/[0.06] px-4 py-2.5 text-sm font-semibold text-white transition-all hover:border-secondary hover:text-secondary"
          >
            GitHub <ArrowUpRight size={14} />
          </a>
          {project.liveDemo ? (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-card-border bg-white/[0.06] px-4 py-2.5 text-sm font-semibold text-white transition-all hover:border-secondary hover:text-secondary"
            >
              Live Demo <ArrowUpRight size={14} />
            </a>
          ) : (
            <span className="cursor-not-allowed rounded-lg border border-dashed border-white/10 px-4 py-2.5 text-sm text-[#4d5169]">
              Live Demo
            </span>
          )}
        </div>
      </motion.div>
    </Reveal>
  );
}
