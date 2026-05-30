"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { CalendarCheck, ChefHat, Coffee, Soup, Utensils } from "lucide-react";

const heroImage =
  "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1800&q=88";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 150]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-20">
      <motion.div
        style={{ y, backgroundImage: `url(${heroImage})` }}
        className="absolute inset-0 scale-110 bg-cover bg-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#3B0D12]/82 via-[#5A161C]/68 to-cream" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_42%,rgba(184,138,42,0.2),transparent_24rem)]" />

      <ChefHat className="floating absolute left-[8%] top-[25%] hidden text-gold/50 sm:block" size={46} />
      <Coffee className="floating absolute right-[12%] top-[32%] hidden text-emerald/55 md:block" size={42} />
      <Soup className="floating absolute bottom-[20%] left-[13%] hidden text-white/28 lg:block" size={44} />

      <div className="section-shell relative z-10 flex min-h-[calc(100vh-5rem)] items-center">
        <motion.div
          initial={{ opacity: 0, y: 42 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-4xl py-24"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold/35 bg-[#3B0D12]/42 px-4 py-2 text-sm text-[#F8E7AA] backdrop-blur-md">
            <Utensils size={16} />
            Premium Veg & Non-Veg Restaurant
          </div>
          <h1 className="font-display text-6xl font-bold leading-[0.95] text-white sm:text-7xl lg:text-8xl">
            JAC GRAND <span className="gold-text">KITCHEN</span>
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-white/84 sm:text-2xl">Just Awesome Cuisine</p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
            A luxury modern Indian dining experience for breakfast specials, biryanis, tandoori delicacies,
            tea, coffee, juices and signature Thati Bellam Tea.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#signature" className="gradient-button inline-flex items-center justify-center rounded-full px-7 py-4 font-semibold transition hover:scale-105">
              View Menu
            </a>
            <a href="#contact" className="outline-button inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-semibold transition hover:border-gold hover:text-gold">
              <CalendarCheck size={19} />
              Book Table
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
