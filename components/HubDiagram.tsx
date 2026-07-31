import Link from "next/link";
import { services } from "@/lib/services-data";
import { ServiceIcon, CpuIcon } from "./icons";
import { RevealOnScroll } from "./RevealOnScroll";

const orbitServices = services.filter((s) => s.slug !== "commerce-os");

export function HubDiagram() {
  const count = orbitServices.length;
  const radius = 42; // percent of container

  return (
    <section className="px-6 py-[100px] bg-[var(--bg-alt)] overflow-hidden">
      <div className="max-w-[1120px] mx-auto">
        <RevealOnScroll className="text-center max-w-[640px] mx-auto mb-16">
          <span className="text-[13px] font-semibold tracking-[0.08em] uppercase text-[var(--accent)] block mb-2.5">
            One Core, Every System
          </span>
          <h2 className="text-[clamp(30px,4.5vw,46px)] font-semibold tracking-tight">
            Commerce OS powers everything around it.
          </h2>
          <p className="mt-3.5 text-[17px] text-[var(--text-2)]">
            Every service ABC Development builds can stand on its own — or
            plug directly into Commerce OS as one connected system.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <div className="relative w-full max-w-[620px] aspect-square mx-auto">
            <div className="absolute inset-0 rounded-full border border-dashed border-[var(--border)]" />
            <div className="absolute inset-[14%] rounded-full border border-dashed border-[var(--border)]" />

            <Link
              href="/services/commerce-os"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[124px] h-[124px] rounded-[32px] bg-[var(--surface)] border border-[var(--border)] shadow-[var(--shadow)] flex flex-col items-center justify-center gap-1.5 text-center px-2 hover:scale-105 transition-transform z-10"
            >
              <CpuIcon className="w-8 h-8 text-[var(--accent)]" />
              <span className="text-[12.5px] font-semibold leading-tight">Commerce OS</span>
            </Link>

            {orbitServices.map((service, i) => {
              const angle = (2 * Math.PI * i) / count - Math.PI / 2;
              const top = 50 + radius * Math.sin(angle);
              const left = 50 + radius * Math.cos(angle);
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="absolute w-16 h-16 -ml-8 -mt-8 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-[var(--shadow)] flex flex-col items-center justify-center gap-1 hover:scale-110 hover:border-[var(--accent)] transition-transform group"
                  style={{ top: `${top}%`, left: `${left}%` }}
                >
                  <ServiceIcon
                    name={service.icon}
                    className="w-5 h-5 text-[var(--text)] group-hover:text-[var(--accent)] transition-colors"
                  />
                </Link>
              );
            })}
          </div>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-10 max-w-[560px] mx-auto">
            {orbitServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="text-[13px] text-[var(--text-2)] hover:text-[var(--accent)] transition-colors"
              >
                {service.navName}
              </Link>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
