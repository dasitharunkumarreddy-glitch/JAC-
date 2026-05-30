"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Flame, Leaf } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75 }}
          className="relative min-h-[460px] overflow-hidden rounded-lg"
        >
          <img
            src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1000&q=84"
            alt="Premium Indian dining table"
            className="h-full min-h-[460px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 glass-card rounded-lg p-5">
            <p className="font-display text-3xl text-gold">Just Awesome Cuisine</p>
            <p className="mt-1 text-sm text-cream/90">Crafted for memorable dining experiences.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75 }}
        >
          <p className="text-sm uppercase tracking-[0.32em] text-gold">About Us</p>
          <h2 className="mt-4 font-display text-5xl font-semibold leading-tight text-ink sm:text-6xl">
            Authentic flavors with high-end hospitality.
          </h2>
          <p className="mt-6 text-lg leading-9 text-muted">
            At JAC Grand Kitchen, we bring together authentic flavors, premium ingredients, and exceptional
            hospitality. From delicious breakfast specials to aromatic biryanis, tandoori delicacies, tea,
            coffee, and signature Thati Bellam Tea, every dish is crafted to create memorable dining experiences.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { icon: BadgeCheck, label: "Premium Service" },
              { icon: Flame, label: "Freshly Cooked" },
              { icon: Leaf, label: "Veg & Non-Veg" }
            ].map((item) => (
              <div key={item.label} className="glass-card rounded-lg p-5">
                <item.icon className="text-gold" size={28} />
                <p className="mt-4 font-semibold text-ink">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
