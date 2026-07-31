import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services-data";
import { InstagramIcon, LinkedInIcon } from "./icons";

const footerServices = services.slice(0, 5);

export function Footer() {
  return (
    <footer className="px-6 pt-[70px] pb-9 border-t border-[var(--border)]">
      <div className="max-w-[1120px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="flex items-center gap-2 font-semibold text-sm tracking-tight">
            <Image
              src="/images/logo/abc-single-logo-hd-transparent.png"
              alt=""
              width={28}
              height={28}
              className="w-[28px] h-[28px] object-contain"
              aria-hidden="true"
            />
            ABC Development
          </Link>
          <p className="mt-3 text-sm text-[var(--text-2)] max-w-[260px] leading-relaxed">
            Custom-built commerce, web, and app solutions — from Commerce OS to
            the smallest integration.
          </p>
          <div className="flex gap-2.5 mt-5">
            <a
              href="https://www.instagram.com/abc_development_lb/"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/abc-development/"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-[13px] uppercase tracking-wider text-[var(--text-2)] font-semibold mb-4">
            Services
          </h4>
          <ul className="space-y-2.5">
            {footerServices.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-[14.5px] opacity-80 hover:opacity-100 hover:text-[var(--accent)] transition">
                  {s.navName}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="text-[14.5px] opacity-80 hover:opacity-100 hover:text-[var(--accent)] transition">
                All services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[13px] uppercase tracking-wider text-[var(--text-2)] font-semibold mb-4">
            Company
          </h4>
          <ul className="space-y-2.5">
            <li><Link href="/about" className="text-[14.5px] opacity-80 hover:opacity-100 hover:text-[var(--accent)] transition">About</Link></li>
            <li><Link href="/contact" className="text-[14.5px] opacity-80 hover:opacity-100 hover:text-[var(--accent)] transition">Contact</Link></li>
            <li><Link href="/services/commerce-os" className="text-[14.5px] opacity-80 hover:opacity-100 hover:text-[var(--accent)] transition">Commerce OS</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[13px] uppercase tracking-wider text-[var(--text-2)] font-semibold mb-4">
            Contact
          </h4>
          <ul className="space-y-2.5">
            <li><a href="mailto:abc.development.lb@outlook.com" className="text-[14.5px] opacity-80 hover:opacity-100 hover:text-[var(--accent)] transition">Email</a></li>
            <li><a href="https://wa.me/96171441380" className="text-[14.5px] opacity-80 hover:opacity-100 hover:text-[var(--accent)] transition">WhatsApp</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1120px] mx-auto mt-[50px] pt-6 border-t border-[var(--border)] flex flex-wrap justify-between gap-3 text-[13px] text-[var(--text-2)]">
        <span>© {new Date().getFullYear()} ABC Development. All rights reserved.</span>
        <span>Beirut, Lebanon · (+961) 71 441 380</span>
      </div>
    </footer>
  );
}
