import Reveal from "@/components/ui/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative z-[1] mx-auto max-w-[1280px] px-[8vw] py-[120px]">
      <div className="mb-[18px] flex items-center gap-2.5 font-mono text-[13px] uppercase tracking-[0.12em] text-secondary before:h-px before:w-6 before:bg-secondary">
        04 · Projects
      </div>
      <Reveal>
        <h2 className="mb-[50px] font-display text-[clamp(28px,4vw,44px)] font-semibold tracking-[-0.02em]">
          Selected Work
        </h2>
      </Reveal>
      <div className="grid grid-cols-1 gap-[26px] md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} delay={i * 0.08} />
        ))}
      </div>
    </section>
  );
}
