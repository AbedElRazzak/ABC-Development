import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-[190px] pb-[70px] px-6 text-center">
      <div
        className="absolute w-[480px] h-[480px] rounded-full opacity-55 blur-[80px] -top-[220px] -left-[120px] animate-float1"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
      />
      <div
        className="absolute w-[420px] h-[420px] rounded-full opacity-55 blur-[80px] -top-[160px] -right-[140px] animate-float2"
        style={{ background: "radial-gradient(circle, var(--accent-2), transparent 70%)" }}
      />
      <div className="relative z-[1] max-w-[820px] mx-auto">
        <span className="text-[13px] font-semibold tracking-[0.08em] uppercase text-[var(--accent)] block mb-2.5">
          ABC Development
        </span>
        <h1 className="text-[clamp(38px,7vw,76px)] font-semibold tracking-tight leading-[1.05] mb-5">
          One developer.
          <br />
          <span className="grad-text">Every system your business runs on.</span>
        </h1>
        <p className="text-[clamp(17px,2vw,21px)] text-[var(--text-2)] max-w-[620px] mx-auto mb-9 leading-relaxed">
          Commerce OS, custom websites, mobile apps, WordPress, Shopify, backend
          systems, and the payment and data infrastructure behind them —
          designed and built end-to-end.
        </p>
        <div className="flex gap-2.5 justify-center flex-wrap">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-[var(--text)] dark:bg-[var(--accent)] text-[var(--bg)] dark:text-white px-6 py-3.5 rounded-full text-[15px] font-medium hover:-translate-y-0.5 hover:shadow-lg transition-all"
          >
            Explore Services
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-[var(--accent)] px-1 py-3.5 text-[15px] font-medium group"
          >
            Talk to us
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
