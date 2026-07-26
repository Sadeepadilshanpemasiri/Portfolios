"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { socials } from "@/lib/data";

export default function GithubStats() {
  return (
    <section id="github" className="relative z-[1] mx-auto max-w-[1280px] px-[8vw] py-[120px]">
      <div className="mb-[18px] flex items-center gap-2.5 font-mono text-[13px] uppercase tracking-[0.12em] text-secondary before:h-px before:w-6 before:bg-secondary">
        06 · GitHub
      </div>
      <Reveal>
        <h2 className="mb-[50px] font-display text-[clamp(28px,4vw,44px)] font-semibold tracking-[-0.02em]">
          Activity
        </h2>
      </Reveal>
      <Reveal delay={0.1} className="grid grid-cols-1 gap-[22px] lg:grid-cols-[1.1fr_0.9fr]">
        <StatCard
          alt={`GitHub stats for ${socials.githubUsername}`}
          src={`https://github-readme-stats.vercel.app/api?username=${socials.githubUsername}&show_icons=true&theme=transparent&hide_border=true&title_color=00F5FF&icon_color=7C3AED&text_color=9297AC`}
        />
        <StatCard
          alt={`Top languages for ${socials.githubUsername}`}
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${socials.githubUsername}&layout=compact&theme=transparent&hide_border=true&title_color=00F5FF&text_color=9297AC`}
        />
      </Reveal>
    </section>
  );
}

function StatCard({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-card-border bg-card p-5 backdrop-blur-md">
      {failed ? (
        <p className="font-mono text-[13px] text-sub">
          GitHub stats are unavailable right now — view the profile directly
          on GitHub.
        </p>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={800}
          height={300}
          unoptimized
          className="w-full rounded-[10px]"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
