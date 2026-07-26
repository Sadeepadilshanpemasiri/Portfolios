"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import Toast, { ToastState } from "@/components/ui/Toast";
import { socials } from "@/lib/data";

type Errors = Partial<Record<"name" | "email" | "subject" | "message", boolean>>;

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);

  function update(field: keyof typeof values, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
  }

  function validate() {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email);
    const next: Errors = {
      name: values.name.trim().length <= 1,
      email: !emailOk,
      subject: values.subject.trim().length <= 1,
      message: values.message.trim().length <= 4,
    };
    setErrors(next);
    return !Object.values(next).some(Boolean);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    /* -----------------------------------------------------------------
       EmailJS integration point:
       npm install @emailjs/browser, then replace this simulated delay:

       import emailjs from '@emailjs/browser';
       await emailjs.send(
         'YOUR_SERVICE_ID',
         'YOUR_TEMPLATE_ID',
         { from_name: values.name, from_email: values.email,
           subject: values.subject, message: values.message },
         'YOUR_PUBLIC_KEY'
       );
    ----------------------------------------------------------------- */
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setLoading(false);
    setToast({ title: "Message sent", body: "Thanks for reaching out — I'll reply soon." });
    setValues({ name: "", email: "", subject: "", message: "" });
    setErrors({});
  }

  return (
    <section id="contact" className="relative z-[1] mx-auto max-w-[1280px] px-[8vw] py-[120px]">
      <div className="mb-[18px] flex items-center gap-2.5 font-mono text-[13px] uppercase tracking-[0.12em] text-secondary before:h-px before:w-6 before:bg-secondary">
        06 · Contact
      </div>
      <Reveal>
        <h2 className="mb-[50px] font-display text-[clamp(28px,4vw,44px)] font-semibold tracking-[-0.02em]">
          Let&apos;s build something
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-[60px] md:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <p className="mb-[26px] text-[15px] leading-[1.8] text-sub">
            Open to junior software developer and mobile development roles,
            freelance builds, or just talking through an idea. Reach out
            directly, or use the form.
          </p>
          <InfoRow label="Email" href={`mailto:${socials.email}`} value={socials.email} />
          <InfoRow label="Phone" href={`tel:${socials.phone}`} value={socials.phoneDisplay} />
          <InfoRow label="WhatsApp" href={socials.whatsapp} value="0717 176 671" external />
          <InfoRow label="Facebook" href={socials.facebook} value="facebook.com/share" external />
          <InfoRow label="Location" value={socials.location} />
          <InfoRow label="GitHub" href={socials.github} value={socials.githubUsername} external />
          <InfoRow label="LinkedIn" href={socials.linkedin} value="sadeepa-dilshan" external />
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl border border-card-border bg-card p-[34px] backdrop-blur-md"
          >
            <Field
              id="name"
              label="Name"
              placeholder="Your name"
              value={values.name}
              onChange={(v) => update("name", v)}
              error={errors.name}
              errorText="Enter your name."
            />
            <Field
              id="email"
              label="Email"
              type="email"
              placeholder="you@email.com"
              value={values.email}
              onChange={(v) => update("email", v)}
              error={errors.email}
              errorText="Enter a valid email address."
            />
            <Field
              id="subject"
              label="Subject"
              placeholder="What's this about?"
              value={values.subject}
              onChange={(v) => update("subject", v)}
              error={errors.subject}
              errorText="Add a subject."
            />
            <Field
              id="message"
              label="Message"
              textarea
              placeholder="Your message"
              value={values.message}
              onChange={(v) => update("message", v)}
              error={errors.message}
              errorText="Write a short message."
            />
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={!loading ? { y: -2, scale: 1.01 } : undefined}
              whileTap={!loading ? { scale: 0.99 } : undefined}
              className="flex w-full items-center justify-center gap-2 rounded-[10px] bg-gradient-to-r from-primary to-accent px-[26px] py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(124,58,237,0.6)] transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading && (
                <span className="h-[15px] w-[15px] animate-spin rounded-full border-2 border-white/30 border-t-white" />
              )}
              <span>{loading ? "Sending..." : "Send Message"}</span>
            </motion.button>
          </form>
        </Reveal>
      </div>

      {toast && <Toast toast={toast} onDone={() => setToast(null)} />}
    </section>
  );
}

function InfoRow({
  label,
  value,
  href,
  external,
}: {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  return (
    <div className="mb-[18px] flex items-center gap-3.5 text-[14.5px]">
      <span className="w-[76px] shrink-0 font-mono text-secondary">{label}</span>
      {href ? (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
          className="text-white transition-colors hover:text-secondary"
        >
          {value}
        </a>
      ) : (
        <span className="text-white">{value}</span>
      )}
    </div>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  placeholder,
  error,
  errorText,
  textarea,
  type = "text",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  error?: boolean;
  errorText: string;
  textarea?: boolean;
  type?: string;
}) {
  const baseClasses =
    "w-full rounded-[9px] border bg-white/[0.03] px-[14px] py-[13px] text-sm text-white outline-none transition-all placeholder:text-sub/60 focus:shadow-[0_0_0_3px_rgba(0,245,255,0.12)]";
  const borderClass = error ? "border-[#ff6b7a]" : "border-card-border focus:border-secondary";

  return (
    <div className="mb-5">
      <label
        htmlFor={id}
        className="mb-2 block font-mono text-xs uppercase tracking-[0.05em] text-sub"
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          rows={5}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={`${baseClasses} ${borderClass}`}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={`${baseClasses} ${borderClass}`}
        />
      )}
      {error && <div className="mt-1.5 font-mono text-xs text-[#ff6b7a]">{errorText}</div>}
    </div>
  );
}
