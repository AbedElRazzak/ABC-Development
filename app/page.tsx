import Link from "next/link";
import { Hero } from "@/components/Hero";
import { HubDiagram } from "@/components/HubDiagram";
import { WhyGrid } from "@/components/WhyGrid";
import { ServiceCard } from "@/components/ServiceCard";
import { CTABanner } from "@/components/CTABanner";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { services } from "@/lib/services-data";

const preview = services.slice(0, 6);

export default function HomePage() {
  return (
    <main>
      <Hero />
      <HubDiagram />
      <WhyGrid />

      <section className="px-6 py-[100px]">
        <div className="max-w-[1120px] mx-auto">
          <RevealOnScroll className="text-center max-w-[600px] mx-auto mb-14">
            <span className="text-[13px] font-semibold tracking-[0.08em] uppercase text-[var(--accent)] block mb-2.5">
              Services
            </span>
            <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-tight">
              Everything your business needs to go online.
            </h2>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {preview.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-[var(--border)] bg-[var(--surface)] px-6 py-3 rounded-full text-[14.5px] font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title="Get a system built around how your business actually works."
        subtitle="From Commerce OS to a single integration — professional development and support, start to finish."
      />
    </main>
  );
}
