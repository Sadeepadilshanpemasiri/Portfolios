import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative z-[1] mx-auto max-w-[1280px] px-[8vw] py-[120px]">
      <div className="mb-[18px] flex items-center gap-2.5 font-mono text-[13px] uppercase tracking-[0.12em] text-secondary before:h-px before:w-6 before:bg-secondary">
        03 · Skills
      </div>
      <Reveal>
        <h2 className="mb-[50px] font-display text-[clamp(28px,4vw,44px)] font-semibold tracking-[-0.02em]">
          Toolbox
        </h2>
      </Reveal>
      <Reveal delay={0.1} className="space-y-12">
        {skillGroups.map((group, groupIndex) => (
          <div key={group.label}>
            <div className="mb-6 font-mono text-[12.5px] uppercase tracking-[0.08em] text-secondary">
              {group.label}
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item, itemIndex) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.08 * (groupIndex + itemIndex) }}
                  className="rounded-[24px] border border-card-border bg-card p-5 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.55)]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-sm text-white">{item.name}</span>
                    <span className="font-semibold text-sm text-secondary">{item.percent}%</span>
                  </div>
                  <div className="mt-4 h-2 rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-secondary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percent}%` }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 1.2, delay: 0.2 + 0.05 * (groupIndex + itemIndex), ease: [0.2, 0.8, 0.2, 1] }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
