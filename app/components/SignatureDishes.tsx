"use client";

import { motion } from "framer-motion";

const dishes = [
  {
    name: "Chicken Biryani",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=900&q=84"
  },
  {
    name: "Mutton Biryani",
    image: "https://images.unsplash.com/photo-1701579231378-3726490a407b?auto=format&fit=crop&w=900&q=84"
  },
  {
    name: "Tandoori Chicken",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=900&q=84"
  },
  {
    name: "Special Dosa",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=900&q=84"
  },
  {
    name: "Paneer Tikka",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=84"
  },
  {
    name: "Tea Specials",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=900&q=84"
  },
  {
    name: "Fresh Juices",
    image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=900&q=84"
  }
];

export default function SignatureDishes() {
  return (
    <section id="signature" className="py-24 sm:py-32">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-gold">Signature Dishes</p>
            <h2 className="mt-4 font-display text-5xl font-semibold text-ink sm:text-6xl">A premium food showcase.</h2>
          </div>
          <a href="#contact" className="outline-button w-fit rounded-full px-6 py-3 text-sm font-semibold transition hover:border-gold hover:text-gold">
            Reserve a Table
          </a>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish, index) => (
            <motion.article
              key={dish.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.04 }}
              className="group overflow-hidden rounded-lg border border-gold/20 bg-card shadow-luxury"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={dish.image} alt={dish.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.26em] text-emerald">Chef Special</p>
                <h3 className="mt-3 font-display text-3xl font-semibold text-ink">{dish.name}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
