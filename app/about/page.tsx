import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { CpuIcon, ServerIcon, CodeIcon, LayersIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "ABC Development is a Beirut-based development practice building Commerce OS, websites, apps, and the systems that run behind them.",
};

const values = [
  {
    title: "One point of contact",
    desc: "The person who designs your system is the same person who builds and supports it.",
    icon: CpuIcon,
  },
  {
    title: "No template ceiling",
    desc: "Custom builds when you've outgrown page builders, and platform expertise when you haven't.",
    icon: LayersIcon,
  },
  {
    title: "Infrastructure that holds up",
    desc: "Payments, data, and backend systems built to be trusted, not just demoed.",
    icon: ServerIcon,
  },
  {
    title: "Built to connect",
    desc: "Every service is designed to plug into Commerce OS — or stand entirely on its own.",
    icon: CodeIcon,
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="A development practice built around one idea: own the whole system."
        subtitle="ABC Development designs and builds the commerce platforms, websites, apps, and backend infrastructure that businesses actually run on — end to end, without handing pieces off to five different vendors."
        size="lg"
      />

      <section className="px-6 py-[80px]">
        <div className="max-w-[1120px] mx-auto grid md:grid-cols-2 gap-4">
          {values.map((v, i) => (
            <RevealOnScroll key={v.title} delay={i * 80}>
              <div className="h-full bg-[var(--surface)] border border-[var(--border)] rounded-[20px] p-7 flex gap-5">
                <div className="w-11 h-11 rounded-[14px] flex items-center justify-center bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] text-white flex-shrink-0">
                  <v.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[17px] font-semibold mb-1.5">{v.title}</h3>
                  <p className="text-[14.5px] text-[var(--text-2)] leading-relaxed">{v.desc}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section className="px-6 py-[80px] bg-[var(--bg-alt)]">
        <RevealOnScroll className="max-w-[720px] mx-auto text-center">
          <span className="text-[13px] font-semibold tracking-[0.08em] uppercase text-[var(--accent)] block mb-2.5">
            How it works
          </span>
          <h2 className="text-[clamp(26px,3.5vw,36px)] font-semibold tracking-tight mb-4">
            Based in Beirut, working with businesses everywhere.
          </h2>
          <p className="text-[17px] text-[var(--text-2)] leading-relaxed">
            Every engagement starts the same way — understanding how your
            business actually operates before a single line of code gets
            written. From there, whether it's a Commerce OS build, a Shopify
            migration, or a single payment integration, the goal is the same:
            software that fits the business, not the other way around.
          </p>
        </RevealOnScroll>
      </section>

      <CTABanner
        title="Have a project in mind?"
        subtitle="Send over what you're working on — we'll get back to you with next steps."
        buttonLabel="Get in touch"
        buttonHref="/contact"
      />
    </main>
  );
}
