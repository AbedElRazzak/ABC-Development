import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  align = "center",
  size = "md",
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  size?: "md" | "lg";
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-[170px] pb-16 px-6">
      <div
        className="absolute w-[420px] h-[420px] rounded-full opacity-40 blur-[80px] -top-[180px] left-1/2 -translate-x-1/2 animate-float1"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
      />
      <div
        className={`relative z-[1] max-w-[760px] mx-auto ${align === "center" ? "text-center" : "text-left"}`}
      >
        <span className="text-[13px] font-semibold tracking-[0.08em] uppercase text-[var(--accent)] block mb-2.5">
          {eyebrow}
        </span>
        <h1
          className={`font-semibold tracking-tight leading-[1.05] ${
            size === "lg" ? "text-[clamp(38px,6.5vw,68px)]" : "text-[clamp(32px,5vw,52px)]"
          }`}
        >
          {title}
        </h1>
        {subtitle && (
          <p className={`mt-5 text-[17px] leading-relaxed ${align === "center" ? "mx-auto" : ""} max-w-[560px]`}>
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
