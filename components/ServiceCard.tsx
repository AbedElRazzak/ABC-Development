import Link from "next/link";
import type { Service } from "@/lib/services-data";
import { ServiceIcon, ArrowRightIcon } from "./icons";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group bg-[var(--surface)] border border-[var(--border)] rounded-[20px] p-7 flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow)] hover:border-transparent"
    >
      <div className="flex items-start justify-between mb-5">
        <div className="w-12 h-12 rounded-[14px] flex items-center justify-center bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] text-white">
          <ServiceIcon name={service.icon} className="w-6 h-6" />
        </div>
        {service.featured && (
          <span className="text-[11px] font-semibold uppercase tracking-wide text-[var(--accent)] border border-[var(--accent)] rounded-full px-2.5 py-1">
            Flagship
          </span>
        )}
      </div>
      <h3 className="text-[19px] font-semibold mb-2 tracking-tight">{service.name}</h3>
      <p className="text-[14.5px] text-[var(--text-2)] leading-relaxed flex-1">{service.tagline}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-[var(--accent)]">
        Learn more
        <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
