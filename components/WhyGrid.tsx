import { RevealOnScroll } from "./RevealOnScroll";
import { CpuIcon, ServerIcon, CodeIcon, WhatsAppIcon } from "./icons";

const items = [
  {
    title: "Full-stack, start to finish",
    desc: "Front end, back end, payments, and infrastructure — one team across the whole build.",
    icon: CpuIcon,
  },
  {
    title: "Platform-agnostic",
    desc: "WordPress, Shopify, or fully custom — built around what your business actually needs.",
    icon: ServerIcon,
  },
  {
    title: "Security-first",
    desc: "Hardened configurations and safe payment integrations, not an afterthought.",
    icon: CodeIcon,
  },
  {
    title: "Direct line, always",
    desc: "You talk to the person building your system — not a support queue.",
    icon: WhatsAppIcon,
  },
];

export function WhyGrid() {
  return (
    <section className="px-6 py-[100px]">
      <div className="max-w-[1120px] mx-auto">
        <RevealOnScroll className="text-center max-w-[600px] mx-auto mb-14">
          <span className="text-[13px] font-semibold tracking-[0.08em] uppercase text-[var(--accent)] block mb-2.5">
            Why ABC Development
          </span>
          <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-tight">
            Built like a product, not a project.
          </h2>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <RevealOnScroll key={item.title} delay={i * 80}>
              <div className="h-full bg-[var(--surface)] border border-[var(--border)] rounded-[20px] p-6">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-alt)] flex items-center justify-center mb-4 text-[var(--accent)]">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-[16px] font-semibold mb-1.5">{item.title}</h3>
                <p className="text-[14px] text-[var(--text-2)] leading-relaxed">{item.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
