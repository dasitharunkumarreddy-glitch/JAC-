import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./styles/**/*.css"],
  theme: {
    extend: {
      colors: {
        gold: "#B88A2A",
        emerald: "#0F7A45",
        ink: "#3B0D12",
        card: "#FFF8E7",
        muted: "#6F5B4E",
        cream: "#F7EFE1"
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      boxShadow: {
        luxury: "0 24px 90px rgba(59,13,18,0.18)",
        glow: "0 0 42px rgba(184,138,42,0.18)"
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #B88A2A, #f1d98d 45%, #0F7A45)"
      }
    }
  },
  plugins: []
};

export default config;
