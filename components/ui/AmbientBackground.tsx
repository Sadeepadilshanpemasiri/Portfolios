export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute -inset-1 bg-grid-pattern bg-grid"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 20%, #000 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 20%, #000 40%, transparent 100%)",
        }}
      />
      <div className="absolute -top-40 -left-28 h-[520px] w-[520px] rounded-full bg-primary opacity-35 blur-[120px]" />
      <div className="absolute top-[280px] -right-36 h-[420px] w-[420px] rounded-full bg-secondary opacity-[0.18] blur-[120px]" />
      <div className="absolute -bottom-24 left-[35%] h-[460px] w-[460px] rounded-full bg-accent opacity-[0.22] blur-[120px]" />
      <div className="noise-overlay absolute inset-0" />
    </div>
  );
}
