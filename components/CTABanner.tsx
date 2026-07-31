import Link from "next/link";
import { RevealOnScroll } from "./RevealOnScroll";

export function CTABanner({
  title,
  subtitle,
  buttonLabel = "Message on WhatsApp",
  buttonHref = "https://wa.me/96171441380",
}: {
  title: string;
  subtitle: string;
  buttonLabel?: string;
  buttonHref?: string;
}) {
  return (
    <section className="px-6 pb-[120px]">
      <RevealOnScroll className="max-w-[1120px] mx-auto rounded-[28px] relative overflow-hidden text-center py-20 px-8 text-white bg-[linear-gradient(135deg,#0a0a0f,#14142b_55%,#1c1c3d)]">
        <div
          className="absolute w-[600px] h-[600px] rounded-full top-[-260px] left-1/2 -translate-x-1/2 blur-[10px]"
          style={{ background: "radial-gradient(circle, rgba(94,92,230,.45), transparent 70%)" }}
        />
        <h2 className="relative text-[clamp(28px,4.5vw,44px)] font-semibold tracking-tight max-w-[620px] mx-auto mb-4 text-white">
          {title}
        </h2>
        <p className="relative text-white/70 max-w-[460px] mx-auto mb-8 text-[17px]">{subtitle}</p>
        <Link
          href={buttonHref}
          className="relative inline-flex bg-white text-black px-6 py-3.5 rounded-full text-[15px] font-medium hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)] transition-shadow"
        >
          {buttonLabel}
        </Link>
      </RevealOnScroll>
    </section>
  );
}
