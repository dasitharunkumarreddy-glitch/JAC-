"use client";

import { motion } from "framer-motion";
import { BadgeIndianRupee, Clock, HeartHandshake, Leaf, ShieldCheck, Sparkles, Utensils } from "lucide-react";

const features = [
  { title: "Premium Ingredients", icon: Sparkles },
  { title: "Freshly Prepared", icon: Leaf },
  { title: "Family Friendly", icon: HeartHandshake },
  { title: "Veg & Non-Veg Options", icon: Utensils },
  { title: "Fast Service", icon: Clock },
  { title: "Hygienic Kitchen", icon: ShieldCheck },
  { title: "Affordable Pricing", icon: BadgeIndianRupee }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-32">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-gold">Why Choose Us</p>
          <h2 className="mt-4 font-display text-5xl font-semibold text-ink sm:text-6xl">Luxury quality, everyday comfort.</h2>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className="glass-card rounded-lg p-6"
            >
              <feature.icon className="text-gold" size={30} />
              <h3 className="mt-5 font-display text-2xl font-semibold text-ink">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">Designed for consistent taste, service and cleanliness.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
