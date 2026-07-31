"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { MenuIcon, CloseIcon, SunIcon, MoonIcon } from "./icons";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <div className="fixed top-4 left-0 right-0 z-[100] flex justify-center pointer-events-none px-4">
        <nav
          className={`pointer-events-auto glass flex items-center gap-1 border border-[var(--border)] rounded-full shadow-[var(--shadow)] transition-[padding,gap] duration-300 max-w-[calc(100vw-16px)] ${
            scrolled ? "py-1.5 pl-3 pr-1.5 gap-0.5" : "py-1.5 pl-3.5 pr-2 gap-1"
          }`}
        >
          <Link href="/" className="flex items-center gap-2 pr-2 pl-0.5 py-1.5 font-semibold text-sm tracking-tight whitespace-nowrap">
            <Image
              src="/images/logo/abc-single-logo-hd-transparent.png"
              alt=""
              width={28}
              height={28}
              className="w-[28px] h-[28px] object-contain flex-shrink-0"
              aria-hidden="true"
            />
            <span className="hidden sm:inline">ABC Development</span>
          </Link>

          <div className="hidden md:flex items-center gap-0.5 mx-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13.5px] font-medium px-3.5 py-2 rounded-full transition-colors ${
                  isActive(link.href)
                    ? "bg-[var(--border)] text-[var(--text)]"
                    : "text-[var(--text)] hover:bg-[var(--border)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={toggle}
              aria-label="Toggle dark mode"
              className="w-[34px] h-[34px] rounded-full flex items-center justify-center hover:bg-[var(--border)] transition-colors flex-shrink-0"
            >
              {theme === "dark" ? <SunIcon className="w-[17px] h-[17px]" /> : <MoonIcon className="w-[17px] h-[17px]" />}
            </button>
            <Link
              href="/contact"
              className="hidden md:inline-flex bg-[var(--text)] dark:bg-[var(--accent)] text-[var(--bg)] dark:text-white text-[13px] font-semibold px-4 py-2 rounded-full hover:scale-105 transition-transform whitespace-nowrap"
            >
              Get in touch
            </Link>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="md:hidden w-[34px] h-[34px] rounded-full flex items-center justify-center hover:bg-[var(--border)] transition-colors"
            >
              <MenuIcon className="w-[17px] h-[17px]" />
            </button>
          </div>
        </nav>
      </div>

      <div
        className={`fixed inset-0 z-[99] bg-[var(--bg)] flex flex-col px-8 pt-28 pb-10 transition-transform duration-500 ease-out ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center border border-[var(--border)]"
        >
          <CloseIcon className="w-4 h-4" />
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-3xl font-semibold tracking-tight py-3.5 border-b border-[var(--border)]"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="mt-7 self-start inline-flex bg-[var(--text)] dark:bg-[var(--accent)] text-[var(--bg)] dark:text-white text-sm font-semibold px-6 py-3.5 rounded-full"
        >
          Get in touch
        </Link>
      </div>
    </>
  );
}
