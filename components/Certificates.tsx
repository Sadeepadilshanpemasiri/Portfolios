import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { certificates } from "@/lib/data";

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="relative z-[1] mx-auto max-w-[1280px] px-[8vw] py-[120px]"
    >
      <div className="mb-[18px] flex items-center gap-2.5 font-mono text-[13px] uppercase tracking-[0.12em] text-secondary before:h-px before:w-6 before:bg-secondary">
        05 · Certificates
      </div>
      <Reveal>
        <h2 className="mb-4 font-display text-[clamp(28px,4vw,44px)] font-semibold tracking-[-0.02em]">
          Certificates
        </h2>
      </Reveal>
      <Reveal delay={0.05}>
        <p className="max-w-[860px] text-[15px] leading-[1.8] text-sub">
          A curated collection of certifications earned through my training and
          development work. These cards show the certificate name, issuing
          organization, and issue date without requiring any external credentials.
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <motion.div
          className="mt-10 grid gap-5 lg:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {certificates.map(({ title, issuer, date, tags }) => (
            <motion.div
              key={title}
              className="rounded-2xl border border-card-border bg-card p-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)] transition-all hover:-translate-y-1 hover:border-secondary"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
              whileHover={{ y: -3, scale: 1.005 }}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm text-secondary">{issuer}</p>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80">
                  {date}
                </span>
              </div>
              {tags?.length ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      </Reveal>
    </section>
  );
}
