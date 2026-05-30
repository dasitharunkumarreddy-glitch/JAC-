"use client";

import { Facebook, Instagram, MapPin, Phone, Youtube } from "lucide-react";

const contacts = ["7013018027", "8886018599", "7981361295"];

export default function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-ink py-12">
      <div className="section-shell grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="font-display text-3xl font-bold text-white">JAC Grand Kitchen</p>
          <p className="mt-2 text-gold">Just Awesome Cuisine</p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-cream/78">Veg & Non-Veg Restaurant serving premium Indian dishes, tea, coffee and fresh juices.</p>
        </div>
        <div>
          <p className="font-semibold text-white">Contact</p>
          <div className="mt-4 grid gap-2">
            {contacts.map((number) => (
              <a key={number} href={`tel:${number}`} className="inline-flex items-center gap-2 text-sm text-cream/78 transition hover:text-gold">
                <Phone size={15} />
                {number}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold text-white">Connect</p>
          <div className="mt-4 flex gap-3">
            {[Instagram, Facebook, Youtube, MapPin].map((Icon, index) => (
              <a
                key={index}
                href={index === 3 ? "https://maps.app.goo.gl/aSiH42z6o7FBNrZY8" : "#home"}
                target={index === 3 ? "_blank" : undefined}
                rel={index === 3 ? "noreferrer" : undefined}
                aria-label="Social media link"
                className="grid h-11 w-11 place-items-center rounded-full border border-gold/25 text-gold transition hover:bg-gold hover:text-ink"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="section-shell mt-10 border-t border-gold/20 pt-6 text-sm text-cream/70">
        Copyright © 2026 JAC Grand Kitchen. All rights reserved.
      </div>
    </footer>
  );
}
