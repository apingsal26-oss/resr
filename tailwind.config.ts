import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0F",
          soft: "#13131A",
          muted: "#6B6B78",
        },
        cream: "#F5F1EA",
        accent: {
          DEFAULT: "#5B5BFF",
          violet: "#8B5BFF",
          pink: "#FF6BC1",
          amber: "#FFB85B",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
      },
      backgroundImage: {
        "hero-aurora":
          "radial-gradient(60% 80% at 20% 20%, rgba(91,91,255,0.35) 0%, transparent 60%), radial-gradient(50% 70% at 80% 30%, rgba(255,107,193,0.28) 0%, transparent 60%), radial-gradient(70% 90% at 50% 90%, rgba(255,184,91,0.22) 0%, transparent 60%)",
        grid:
          "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "pulse-slow": "pulse 6s cubic-bezier(0.4,0,0.6,1) infinite",
        float: "float 9s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
