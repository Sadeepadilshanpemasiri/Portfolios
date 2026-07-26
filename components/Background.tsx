import Reveal from "@/components/ui/Reveal";
import { education, experience } from "@/lib/data";

export default function Background() {
  return (
    <section
      id="experience"
      className="relative z-[1] mx-auto max-w-[1280px] px-[8vw] py-[120px]"
    >
      <div className="mb-[18px] flex items-center gap-2.5 font-mono text-[13px] uppercase tracking-[0.12em] text-secondary before:h-px before:w-6 before:bg-secondary">
        02 · Background
      </div>
      <Reveal>
        <h2 className="mb-[50px] font-display text-[clamp(28px,4vw,44px)] font-semibold tracking-[-0.02em]">
          Education &amp; Experience
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-20 md:grid-cols-2 md:gap-[60px]">
        <Reveal>
          <div className="mb-[22px] font-mono text-[13px] uppercase tracking-[0.08em] text-sub">
            Education
          </div>
          <div className="relative border-l border-card-border pl-7">
            {education.map((item) => (
              <div key={item.title} className="relative mb-[38px] last:mb-0">
                <span className="absolute -left-[33px] top-1 h-[9px] w-[9px] rounded-full border-2 border-secondary bg-bg shadow-[0_0_10px_rgba(0,245,255,0.5)]" />
                <div className="font-mono text-xs tracking-[0.05em] text-secondary">
                  {item.date}
                </div>
                <div className="mt-1.5 font-display text-[19px] font-semibold">
                  {item.title}
                </div>
                <div className="mt-0.5 text-sm text-sub">{item.org}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mb-[22px] font-mono text-[13px] uppercase tracking-[0.08em] text-sub">
            Experience
          </div>
          <div className="relative border-l border-card-border pl-7">
            {experience.map((item) => (
              <div key={item.role} className="relative mb-[38px] last:mb-0">
                <span className="absolute -left-[33px] top-1 h-[9px] w-[9px] rounded-full border-2 border-secondary bg-bg shadow-[0_0_10px_rgba(0,245,255,0.5)]" />
                <div className="font-mono text-xs tracking-[0.05em] text-secondary">
                  {item.date}
                </div>
                <div className="mt-1.5 font-display text-[19px] font-semibold">
                  {item.role}
                </div>
                <div className="mb-2.5 mt-0.5 text-sm text-sub">{item.org}</div>
                <div className="text-[14.5px] leading-[1.7] text-sub">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
