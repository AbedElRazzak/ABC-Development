import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { MailIcon, WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with ABC Development about your project.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about what you're building."
        subtitle="Whether it's Commerce OS or a single integration, tell us where you're starting from."
      />

      <section className="px-6 pb-[120px]">
        <div className="max-w-[1000px] mx-auto grid md:grid-cols-[1fr_1.3fr] gap-6">
          <RevealOnScroll className="space-y-4">
            <a
              href="https://wa.me/96171441380"
              className="flex items-center gap-4 bg-[var(--surface)] border border-[var(--border)] rounded-[20px] p-6 hover:border-[var(--accent)] transition-colors"
            >
              <div className="w-12 h-12 rounded-[14px] flex items-center justify-center bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] text-white flex-shrink-0">
                <WhatsAppIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-[16px] font-semibold">WhatsApp</h3>
                <p className="text-[14px] text-[var(--text-2)]">+961 71 441 380</p>
              </div>
            </a>
            <a
              href="mailto:abc.development.lb@outlook.com"
              className="flex items-center gap-4 bg-[var(--surface)] border border-[var(--border)] rounded-[20px] p-6 hover:border-[var(--accent)] transition-colors"
            >
              <div className="w-12 h-12 rounded-[14px] flex items-center justify-center bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] text-white flex-shrink-0">
                <MailIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-[16px] font-semibold">Email</h3>
                <p className="text-[14px] text-[var(--text-2)] break-all">
                  abc.development.lb@outlook.com
                </p>
              </div>
            </a>
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[20px] p-6">
              <h3 className="text-[16px] font-semibold mb-1.5">Based in</h3>
              <p className="text-[14px] text-[var(--text-2)]">Beirut, Lebanon</p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={100} className="bg-[var(--surface)] border border-[var(--border)] rounded-[20px] p-7">
            <ContactForm />
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}
