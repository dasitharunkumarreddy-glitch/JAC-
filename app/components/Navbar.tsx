"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Specialties", href: "#specialties" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-gold/20 bg-ink/82 backdrop-blur-xl"
    >
      <nav className="section-shell flex h-20 items-center justify-between">
        <a href="#home" className="group">
          <p className="font-display text-2xl font-bold leading-none text-white">JAC Grand Kitchen</p>
          <p className="text-xs uppercase tracking-[0.34em] text-gold">Just Awesome Cuisine</p>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-cream/82 transition hover:text-gold">
              {item.label}
            </a>
          ))}
          <a
            href="tel:7013018027"
            className="gradient-button inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition hover:scale-105"
          >
            <Phone size={17} />
            Call Now
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-white lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-gold/20 bg-ink/95 lg:hidden"
          >
            <div className="section-shell grid gap-2 py-5">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-3 text-cream/84 transition hover:bg-cream/10 hover:text-gold"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
