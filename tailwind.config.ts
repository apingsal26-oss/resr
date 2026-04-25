import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Page surfaces
        cream: {
          DEFAULT: "#F4EFE6",
          warm: "#EDE6D7",
          deep: "#E5DCC8",
        },
        ink: {
          DEFAULT: "#0E1014",
          soft: "#1A1D24",
          muted: "#5C5F66",
          subtle: "#8B8E96",
        },
        // Pastel accents (panel fills)
        sage: "#C9D7C2",
        blush: "#F2C8C0",
        mustard: "#E6CE85",
        lavender: "#CFC8E7",
        sky: "#BFD3DC",
        // Brand mark
        leaf: "#1F3A2E",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: [
          "var(--font-display)",
          "ui-serif",
          "Iowan Old Style",
          "Apple Garamond",
          "Georgia",
          "serif",
        ],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      fontSize: {
        // Display ramp
        d1: ["clamp(3rem, 7.2vw, 7.5rem)", { lineHeight: "0.96", letterSpacing: "-0.035em" }],
        d2: ["clamp(2.4rem, 5.4vw, 5.5rem)", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
        d3: ["clamp(2rem, 3.6vw, 3.5rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
      },
      backgroundImage: {
        "noise-soft":
          "radial-gradient(circle at 1px 1px, rgba(14,16,20,0.06) 1px, transparent 0)",
        grid:
          "linear-gradient(to right, rgba(14,16,20,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(14,16,20,0.06) 1px, transparent 1px)",
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "blob-1": "blob1 16s ease-in-out infinite",
        "blob-2": "blob2 19s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blob1: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(20px,-30px) scale(1.05)" },
        },
        blob2: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(-24px,28px) scale(1.04)" },
        },
      },
      boxShadow: {
        soft: "0 1px 0 rgba(14,16,20,0.04), 0 8px 24px -12px rgba(14,16,20,0.18)",
        lift: "0 1px 0 rgba(14,16,20,0.05), 0 30px 60px -30px rgba(14,16,20,0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
