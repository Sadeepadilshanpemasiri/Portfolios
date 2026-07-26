"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { terminalScript } from "@/lib/data";

type Line = { type: "cmd" | "out"; text: string; done: boolean };

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>([]);
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    let cancelled = false;

    async function run() {
      for (const item of terminalScript) {
        if (cancelled) return;
        if (item.type === "cmd") {
          setLines((prev) => [...prev, { type: "cmd", text: "", done: false }]);
          for (let i = 1; i <= item.text.length; i++) {
            if (cancelled) return;
            await sleep(38);
            setLines((prev) => {
              const next = [...prev];
              next[next.length - 1] = {
                type: "cmd",
                text: item.text.slice(0, i),
                done: i === item.text.length,
              };
              return next;
            });
          }
          await sleep(220);
        } else {
          setLines((prev) => [...prev, { type: "out", text: item.text, done: true }]);
          await sleep(160);
        }
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
      className="rounded-2xl border border-card-border bg-bg-elev/75 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl overflow-hidden"
    >
      <div className="flex items-center gap-2 border-b border-card-border bg-white/[0.02] px-4 py-3.5">
        <span className="h-[11px] w-[11px] rounded-full bg-[#ff5f56]" />
        <span className="h-[11px] w-[11px] rounded-full bg-[#ffbd2e]" />
        <span className="h-[11px] w-[11px] rounded-full bg-[#27c93f]" />
        <span className="ml-2 font-mono text-xs text-sub">whoami.sh — zsh</span>
      </div>
      <div className="min-h-[280px] px-6 py-5 font-mono text-[13.5px] leading-[1.9]">
        {lines.map((line, i) =>
          line.type === "cmd" ? (
            <div key={i}>
              <span className="text-secondary">sadeepa@dev</span>
              <span className="text-sub">:</span>
              <span className="text-accent">~</span>
              <span className="text-sub">$&nbsp;</span>
              <span className="text-white">{line.text}</span>
            </div>
          ) : (
            <TerminalOutLine key={i} text={line.text} />
          )
        )}
      </div>
    </motion.div>
  );
}

function TerminalOutLine({ text }: { text: string }) {
  const [key, value] = text.includes(":") ? splitFirst(text, ":") : [null, text];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {key ? (
        <>
          <span className="text-[#e6a4ff]">{key}</span>
          <span className="text-sub">:</span>
          <span className="text-white">{value}</span>
        </>
      ) : (
        <span className="text-[#5c6280]">{value}</span>
      )}
    </motion.div>
  );
}

function splitFirst(str: string, sep: string): [string, string] {
  const idx = str.indexOf(sep);
  return [str.slice(0, idx), str.slice(idx + 1)];
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
