"use client";

import { motion } from "framer-motion";
import { Beef, Coffee, CupSoda, Flame, GlassWater, Popcorn, Soup } from "lucide-react";

const specialties = [
  { title: "Breakfast", icon: Soup },
  { title: "Biryani", icon: Beef },
  { title: "Tandoori", icon: Flame },
  { title: "Tea & Coffee", icon: Coffee },
  { title: "Thati Bellam Tea", icon: GlassWater },
  { title: "Fresh Juices", icon: CupSoda },
  { title: "Pan Point", icon: Popcorn }
];

export default function Specialties() {
  return (
    <section id="specialties" className="bg-card/70 py-24 sm:py-32">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-gold">Specialties</p>
          <h2 className="mt-4 font-display text-5xl font-semibold text-ink sm:text-6xl">Crafted for every craving.</h2>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {specialties.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card group rounded-lg p-7"
            >
              <div className="grid h-14 w-14 place-items-center rounded-full border border-gold/30 bg-gold/10 text-gold transition group-hover:bg-gold group-hover:text-ink">
                <item.icon size={27} />
              </div>
              <h3 className="mt-7 font-display text-3xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">Prepared with rich flavor, fresh ingredients and elegant presentation.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
