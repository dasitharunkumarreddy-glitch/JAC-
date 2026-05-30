"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

const directionsUrl = "https://maps.app.goo.gl/aSiH42z6o7FBNrZY8";

export default function Location() {
  return (
    <section id="location" className="py-24 sm:py-32">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
        >
          <p className="text-sm uppercase tracking-[0.32em] text-gold">Location</p>
          <h2 className="mt-4 font-display text-5xl font-semibold text-ink sm:text-6xl">Find your way to JAC Grand Kitchen.</h2>
          <p className="mt-5 text-lg leading-8 text-muted">Open Google Maps for exact directions to the restaurant location.</p>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="gradient-button mt-8 inline-flex items-center gap-2 rounded-full px-7 py-4 font-semibold transition hover:scale-105"
          >
            <Navigation size={19} />
            Get Directions
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="overflow-hidden rounded-lg border border-gold/20 bg-card shadow-luxury"
        >
          <div className="flex items-center gap-3 border-b border-gold/20 p-4 text-muted">
            <MapPin className="text-gold" size={20} />
            JAC Grand Kitchen
          </div>
          <iframe
            title="JAC Grand Kitchen Google Maps location"
            src="https://www.google.com/maps?q=JAC%20Grand%20Kitchen&output=embed"
            className="h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
