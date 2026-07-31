import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { ServiceCard } from "@/components/ServiceCard";
import { ServiceIcon, CheckIcon } from "@/components/icons";
import { services, getService } from "@/lib/services-data";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = getService(params.slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.description,
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = getService(params.slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <main>
      <PageHero eyebrow={service.eyebrow} title={service.tagline} size="lg">
        <p className="mt-5 text-[17px] leading-relaxed max-w-[620px] mx-auto text-[var(--text-2)]">
          {service.description}
        </p>
        <div className="flex gap-2.5 justify-center flex-wrap mt-8">
          <a
            href="https://wa.me/96171441380"
            className="inline-flex items-center gap-2 bg-[var(--text)] dark:bg-[var(--accent)] text-[var(--bg)] dark:text-white px-6 py-3.5 rounded-full text-[15px] font-medium hover:-translate-y-0.5 hover:shadow-lg transition-all"
          >
            Message on WhatsApp
          </a>
          <a
            href="/services"
            className="inline-flex items-center gap-2 text-[var(--accent)] px-1 py-3.5 text-[15px] font-medium"
          >
            ← All services
          </a>
        </div>
      </PageHero>

      <section className="px-6 py-[80px]">
        <div className="max-w-[1120px] mx-auto">
          <RevealOnScroll className="text-center max-w-[560px] mx-auto mb-14">
            <span className="text-[13px] font-semibold tracking-[0.08em] uppercase text-[var(--accent)] block mb-2.5">
              What's included
            </span>
            <h2 className="text-[clamp(26px,3.5vw,36px)] font-semibold tracking-tight">
              Capabilities
            </h2>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.capabilities.map((cap, i) => (
              <RevealOnScroll key={cap.title} delay={i * 60}>
                <div className="h-full bg-[var(--surface)] border border-[var(--border)] rounded-[20px] p-6">
                  <div className="w-11 h-11 rounded-[14px] flex items-center justify-center bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] text-white mb-4">
                    <ServiceIcon name={cap.icon} className="w-5 h-5" />
                  </div>
                  <h3 className="text-[16px] font-semibold mb-1.5">{cap.title}</h3>
                  <p className="text-[14px] text-[var(--text-2)] leading-relaxed">{cap.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-[80px] bg-[var(--bg-alt)]">
        <div className="max-w-[1120px] mx-auto">
          <RevealOnScroll className="text-center max-w-[560px] mx-auto mb-14">
            <span className="text-[13px] font-semibold tracking-[0.08em] uppercase text-[var(--accent)] block mb-2.5">
              How it works
            </span>
            <h2 className="text-[clamp(26px,3.5vw,36px)] font-semibold tracking-tight">
              The process
            </h2>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.process.map((step, i) => (
              <RevealOnScroll key={step.title} delay={i * 80}>
                <div className="h-full bg-[var(--surface)] border border-[var(--border)] rounded-[20px] p-6 relative">
                  <span className="text-[13px] font-semibold text-[var(--accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[16px] font-semibold mt-2 mb-1.5">{step.title}</h3>
                  <p className="text-[14px] text-[var(--text-2)] leading-relaxed">{step.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-[80px]">
        <div className="max-w-[1120px] mx-auto">
          <RevealOnScroll className="max-w-[780px] mx-auto text-center">
            <span className="text-[13px] font-semibold tracking-[0.08em] uppercase text-[var(--accent)] block mb-2.5">
              Built with
            </span>
            <div className="flex flex-wrap justify-center gap-2.5 mt-4">
              {service.stack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 text-[13.5px] font-medium border border-[var(--border)] bg-[var(--surface)] rounded-full px-4 py-2"
                >
                  <CheckIcon className="w-3.5 h-3.5 text-[var(--accent)]" />
                  {tech}
                </span>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="px-6 py-[80px] bg-[var(--bg-alt)]">
        <div className="max-w-[1120px] mx-auto">
          <RevealOnScroll className="text-center max-w-[560px] mx-auto mb-14">
            <span className="text-[13px] font-semibold tracking-[0.08em] uppercase text-[var(--accent)] block mb-2.5">
              Explore more
            </span>
            <h2 className="text-[clamp(26px,3.5vw,36px)] font-semibold tracking-tight">
              Pairs well with
            </h2>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {related.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title={`Ready to start with ${service.name.toLowerCase()}?`}
        subtitle="Tell us about your project and we'll walk you through the right approach."
      />
    </main>
  );
}
