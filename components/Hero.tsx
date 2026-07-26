"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, MessageCircle, Share2 } from "lucide-react";
import Terminal from "@/components/ui/Terminal";
import { roles, socials } from "@/lib/data";

export default function Hero() {
  const [text, setText] = useState("");

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    function tick() {
      const current = roles[roleIndex];
      if (!deleting) {
        charIndex++;
        setText(current.slice(0, charIndex));
        if (charIndex === current.length) {
          deleting = true;
          timeout = setTimeout(tick, 1400);
          return;
        }
      } else {
        charIndex--;
        setText(current.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }
      timeout = setTimeout(tick, deleting ? 32 : 62);
    }

    tick();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative z-[1] mx-auto max-w-[1280px] px-[8vw] pb-20 pt-[140px] min-h-screen flex flex-col justify-center">
      <div className="grid grid-cols-1 items-center gap-[60px] lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className="mb-5 font-mono text-sm tracking-[0.08em] text-secondary">
            // undergraduate · software & mobile developer
          </div>
          <h1 className="font-display text-[clamp(42px,6.4vw,84px)] font-bold leading-[1.02] tracking-[-0.03em]">
            Sadeepa
            <br />
            <span className="text-gradient">Dilshan</span>
          </h1>
          <div className="mt-[22px] h-7 font-mono text-[clamp(16px,2vw,20px)] text-sub">
            {text}
            <span className="animate-blink text-secondary">_</span>
          </div>
          <p className="mt-[26px] max-w-[520px] text-base leading-[1.7] text-sub">
            BHSc Health Information &amp; Communication Technology undergraduate
            building offline-first mobile apps and full-stack systems — with a
            growing focus on applied AI.
          </p>
          <motion.div
            className="mt-[38px] flex flex-wrap gap-3.5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <motion.a
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/Sadeepa_Dilshan.pdf"
              download="Sadeepa_Dilshan.pdf"
              className="inline-flex items-center gap-2 rounded-[10px] bg-gradient-to-r from-primary to-accent px-[26px] py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(124,58,237,0.6)] transition-all hover:shadow-[0_12px_36px_-6px_rgba(124,58,237,0.75)]"
            >
              Download CV
            </motion.a>
            <motion.a
              whileHover={{ y: -2, scale: 1.01 }}
              className="inline-flex items-center gap-2 rounded-[10px] border border-card-border bg-card px-[26px] py-3.5 text-sm font-semibold text-white transition-all hover:border-secondary"
              href="#projects"
            >
              View Projects
            </motion.a>
            <motion.a
              whileHover={{ y: -2, scale: 1.01 }}
              className="inline-flex items-center gap-2 rounded-[10px] border border-card-border bg-card px-[26px] py-3.5 text-sm font-semibold text-white transition-all hover:border-secondary"
              href={socials.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={16} /> GitHub
            </motion.a>
            <motion.a
              whileHover={{ y: -2, scale: 1.01 }}
              className="inline-flex items-center gap-2 rounded-[10px] border border-card-border bg-card px-[26px] py-3.5 text-sm font-semibold text-white transition-all hover:border-secondary"
              href={socials.facebook}
              target="_blank"
              rel="noreferrer"
            >
              <Share2 size={16} /> Facebook
            </motion.a>
            <motion.a
              whileHover={{ y: -2, scale: 1.01 }}
              className="inline-flex items-center gap-2 rounded-[10px] border border-card-border bg-card px-[26px] py-3.5 text-sm font-semibold text-white transition-all hover:border-secondary"
              href={socials.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={16} /> WhatsApp
            </motion.a>
            <motion.a
              whileHover={{ y: -2, scale: 1.01 }}
              className="inline-flex items-center gap-2 rounded-[10px] border border-card-border bg-card px-[26px] py-3.5 text-sm font-semibold text-white transition-all hover:border-secondary"
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={16} /> LinkedIn
            </motion.a>
          </motion.div>
        </motion.div>

        <Terminal />
      </div>
    </section>
  );
}
