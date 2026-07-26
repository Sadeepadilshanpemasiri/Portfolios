import { motion } from "framer-motion";
import Image from "next/image";
import { Rocket, Smartphone, BrainCircuit, HeartPulse } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const highlights = [
  { icon: Rocket, label: "Full-Stack Development" },
  { icon: Smartphone, label: "Mobile & Desktop Apps" },
  { icon: BrainCircuit, label: "Machine Learning" },
  { icon: HeartPulse, label: "Digital Healthcare" },
];

export default function About() {
  return (
    <section id="about" className="relative z-[1] mx-auto max-w-[1280px] px-[8vw] py-[120px]">
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card px-4 py-1.5 font-mono text-xs text-secondary">
          About me
        </span>
      </Reveal>

      <div className="mt-6 grid grid-cols-1 items-center gap-[60px] lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <h2 className="font-display text-[clamp(32px,4.5vw,48px)] font-bold tracking-[-0.02em]">
              Who I am
            </h2>
            <span className="mt-4 block h-[3px] w-16 rounded-full bg-secondary" />
          </Reveal>

          <Reveal delay={0.05}>
            <p className="mt-7 text-lg leading-[1.7] text-white">
              A Health Information &amp; Communication Technology undergraduate
              with a passion for building multi-platform software that solves
              real-world problems.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-6 space-y-5 text-[15.5px] leading-[1.85] text-sub">
            <p>
              I&apos;m a Health Information &amp; Communication Technology
              undergraduate with hands-on experience in full-stack, mobile,
              and desktop application development. I have worked with modern
              programming languages and frameworks including{" "}
              <strong className="font-semibold text-white">Python</strong>,{" "}
              <strong className="font-semibold text-white">Java</strong>,{" "}
              <strong className="font-semibold text-white">Dart</strong>,{" "}
              <strong className="font-semibold text-white">Flutter</strong>,
              and <strong className="font-semibold text-white">Node.js</strong>{" "}
              to build user-centric digital solutions. With practical industry
              experience as a Junior Software Developer, I focus on writing
              clean, scalable backend logic and deploying functional desktop
              and mobile applications.
            </p>
            <p>
              Alongside my software development background, I am actively
              expanding my knowledge in machine learning and data frameworks
              like <strong className="font-semibold text-white">TensorFlow</strong>.
              I am highly passionate about exploring how cross-platform
              technologies and smart automation can streamline processes,
              optimize performance, and create more impactful digital
              healthcare infrastructures.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-9 grid grid-cols-2 gap-3.5 sm:grid-cols-4">
            {highlights.map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                className="flex flex-col items-center gap-2.5 rounded-2xl border border-card-border bg-card px-3 py-5 text-center backdrop-blur-md"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
                whileHover={{ y: -3, scale: 1.01 }}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <Icon size={20} />
                </span>
                <span className="text-xs font-medium leading-tight text-sub">{label}</span>
              </motion.div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative mx-auto w-full max-w-[380px]">
          <motion.div
            className="pointer-events-none absolute -inset-6 rounded-full bg-gradient-to-br from-primary/30 via-secondary/10 to-transparent blur-2xl"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          />
          <span className="absolute -top-2 -left-2 h-8 w-8 rounded-tl-2xl border-l-2 border-t-2 border-secondary/60" />
          <span className="absolute -top-2 -right-2 h-8 w-8 rounded-tr-2xl border-r-2 border-t-2 border-secondary/60" />
          <motion.div
            className="relative aspect-square overflow-hidden rounded-full border border-secondary/40 bg-bg-elev shadow-[0_0_60px_-10px_rgba(0,245,255,0.25)]"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            whileHover={{ scale: 1.008 }}
          >
            <Image
              src="/portfolio.png"
              alt="Sadeepa Dilshan"
              fill
              sizes="(max-width: 1024px) 320px, 380px"
              className="object-cover object-top"
              priority
            />
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
