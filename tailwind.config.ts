import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          1: "var(--slate-1)",
          2: "var(--slate-2)",
          3: "var(--slate-3)",
          8: "var(--slate-8)",
          12: "var(--slate-12)",
        },
        indigo: {
          9: "var(--indigo-9)",
        },
        red: {
          '500': 'hsla(358, 75%, 59%, 1)'
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
