"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useState } from "react";

const reviews = [
  "Amazing biryani and tandoori dishes.",
  "Best family restaurant experience.",
  "Excellent tea and breakfast options."
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % reviews.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, []);

  const move = (direction: number) => {
    setIndex((value) => (value + direction + reviews.length) % reviews.length);
  };

  return (
    <section className="bg-card/70 py-24 sm:py-32">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-gold">Customer Reviews</p>
          <h2 className="mt-4 font-display text-5xl font-semibold text-ink sm:text-6xl">Loved by our guests.</h2>
        </div>
        <div className="mx-auto mt-14 max-w-3xl">
          <div className="glass-card relative overflow-hidden rounded-lg p-8 text-center sm:p-12">
            <Quote className="mx-auto text-gold" size={42} />
            <AnimatePresence mode="wait">
              <motion.div
                key={reviews[index]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
              >
                <p className="mt-6 text-2xl tracking-[0.12em] text-gold">★★★★★</p>
                <p className="mt-5 font-display text-3xl leading-tight text-ink sm:text-4xl">{reviews[index]}</p>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous review"
              onClick={() => move(-1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-gold/40 text-ink transition hover:bg-gold hover:text-ink"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              aria-label="Next review"
              onClick={() => move(1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-gold/40 text-ink transition hover:bg-gold hover:text-ink"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
