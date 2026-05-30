"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

const gallery = [
  {
    title: "Restaurant Ambience",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=900&q=84"
  },
  {
    title: "Biryani Platter",
    image: "https://images.unsplash.com/photo-1633945274309-2c16c9682a8c?auto=format&fit=crop&w=900&q=84"
  },
  {
    title: "Tandoori Grill",
    image: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?auto=format&fit=crop&w=900&q=84"
  },
  {
    title: "Breakfast Specials",
    image: "https://images.unsplash.com/photo-1694849789325-914b71ab4075?auto=format&fit=crop&w=900&q=84"
  },
  {
    title: "Tea Service",
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=900&q=84"
  },
  {
    title: "Fresh Juices",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=900&q=84"
  }
];

export default function Gallery() {
  const [activeImage, setActiveImage] = useState<(typeof gallery)[number] | null>(null);

  return (
    <section id="gallery" className="bg-card/70 py-24 sm:py-32">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-gold">Gallery</p>
          <h2 className="mt-4 font-display text-5xl font-semibold text-ink sm:text-6xl">Experience JAC Grand Kitchen</h2>
        </div>
        <div className="masonry mt-14">
          {gallery.map((item, index) => (
            <motion.button
              key={item.title}
              type="button"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.04 }}
              onClick={() => setActiveImage(item)}
              className="masonry-item group mb-4 block w-full overflow-hidden rounded-lg border border-gold/20 bg-card text-left shadow-luxury"
            >
              <img
                src={item.image}
                alt={item.title}
                className={`w-full object-cover transition duration-700 group-hover:scale-110 ${index % 2 ? "h-80" : "h-60"}`}
              />
              <div className="p-4">
                <p className="font-display text-2xl text-ink">{item.title}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeImage ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] grid place-items-center bg-ink/86 p-4 backdrop-blur-sm"
            onClick={() => setActiveImage(null)}
          >
            <button
              type="button"
              aria-label="Close gallery preview"
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition hover:border-gold hover:text-gold"
            >
              <X size={22} />
            </button>
            <motion.img
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              src={activeImage.image}
              alt={activeImage.title}
              className="max-h-[82vh] w-full max-w-5xl rounded-lg object-contain shadow-luxury"
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
