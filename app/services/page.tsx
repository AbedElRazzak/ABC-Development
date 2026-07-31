import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { CTABanner } from "@/components/CTABanner";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Commerce OS, custom websites, WordPress, Shopify, app development, backend systems, CMS, payment gateways, data migration, and hosting.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Custom-built solutions, end to end."
        subtitle="From a single integration to a full commerce platform — every service is built around your business, not a template."
        size="lg"
      />

      <section className="px-6 pb-[120px]">
        <div className="max-w-[1120px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <CTABanner
        title="Not sure which service fits?"
        subtitle="Tell us what you're trying to build — we'll help you figure out the right starting point."
        buttonLabel="Start a conversation"
        buttonHref="/contact"
      />
    </main>
  );
}
