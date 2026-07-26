"use client";

import { useEffect, useState } from "react";

export type ToastState = { title: string; body: string };

export default function Toast({
  toast,
  onDone,
}: {
  toast: ToastState;
  onDone: () => void;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const show = setTimeout(() => setVisible(true), 10);
    const hide = setTimeout(() => setVisible(false), 4200);
    const remove = setTimeout(onDone, 4600);
    return () => {
      clearTimeout(show);
      clearTimeout(hide);
      clearTimeout(remove);
    };
  }, [toast, onDone]);

  return (
    <div
      className={`fixed bottom-7 right-7 z-[100] max-w-[300px] rounded-[10px] border border-card-border border-l-[3px] border-l-secondary bg-bg-elev px-5 py-4 text-sm shadow-[0_20px_50px_-12px_rgba(0,0,0,0.6)] transition-transform duration-400 ${
        visible ? "translate-x-0" : "translate-x-[140%]"
      }`}
    >
      <div className="mb-0.5 font-semibold text-white">{toast.title}</div>
      <div className="text-[13px] text-sub">{toast.body}</div>
    </div>
  );
}
