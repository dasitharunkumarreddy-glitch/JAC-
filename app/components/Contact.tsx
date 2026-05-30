"use client";

import { motion } from "framer-motion";
import { CalendarCheck, MessageCircle, Phone } from "lucide-react";

const contacts = ["7013018027", "8886018599", "7981361295"];
const whatsapp = "917013018027";

export default function Contact() {
  return (
    <section id="contact" className="bg-card/70 py-24 sm:py-32">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="glass-card rounded-lg p-8 sm:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-gold">Contact</p>
              <h2 className="mt-4 font-display text-5xl font-semibold text-ink sm:text-6xl">Call, WhatsApp or book your table.</h2>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {contacts.map((number) => (
                  <a
                    key={number}
                    href={`tel:${number}`}
                    className="rounded-lg border border-gold/20 bg-white/45 p-4 text-center font-semibold text-ink transition hover:border-gold hover:text-gold"
                  >
                    {number}
                  </a>
                ))}
              </div>
            </div>
            <div className="grid gap-4">
              <a href="tel:7013018027" className="gradient-button inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-semibold transition hover:scale-[1.02]">
                <Phone size={19} />
                Call Now
              </a>
              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="outline-button inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-semibold transition hover:border-emerald hover:text-emerald"
              >
                <MessageCircle size={19} />
                WhatsApp
              </a>
              <a href="tel:7013018027" className="outline-button inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-semibold transition hover:border-gold hover:text-gold">
                <CalendarCheck size={19} />
                Book Table
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
