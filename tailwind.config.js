/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      // ── BRAND COLORS ─────────────────────────────────────────────
      colors: {
        brand: {
          // Primary Palette
          purple:       "#6918DC",
          violet:       "#B625B9",
          pink:         "#E94B6C",
          orange:       "#F6A83D",

          // Dark Variants
          "purple-dv":  "#330066",
          "violet-dv":  "#660066",
          "pink-dv":    "#990033",
          "orange-dv":  "#CC3300",

          // Neutrals
          black:        "#000000",
          white:        "#FFFFFF",
        },
        
      },
      //Animation 
       animation: {
    marquee: "marquee 35s linear infinite",
    "marquee-reverse": "marquee-reverse 40s linear infinite",
  },
  keyframes: {
    marquee: {
      "0%": { transform: "translateX(0)" },
      "100%": { transform: "translateX(-50%)" },
    },
    "marquee-reverse": {
      "0%": { transform: "translateX(-50%)" },
      "100%": { transform: "translateX(0)" },
    },
  },

      // ── BACKGROUND GRADIENTS ──────────────────────────────────────
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(90deg, #6918DC 0%, #B625B9 30%, #E94B6C 60%, #F6A83D 100%)",
        "brand-gradient-purple-violet":
          "linear-gradient(90deg, #6918DC 0%, #B625B9 100%)",
        "brand-gradient-violet-pink":
          "linear-gradient(90deg, #B625B9 0%, #E94B6C 100%)",
        "brand-gradient-pink-orange":
          "linear-gradient(90deg, #E94B6C 0%, #F6A83D 100%)",
      },

      // ── FONT FAMILIES ─────────────────────────────────────────────
      // Add to index.html <head>:
      // <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Raleway:wght@500;700&display=swap" rel="stylesheet">
      fontFamily: {
        display: ['"Bebas Neue"', "sans-serif"],  // Contact Us titles
        body:    ["Raleway", "sans-serif"],        // All headings & body
      },

      // ── FONT SIZES (pt → rem, base 16px) ─────────────────────────
      // Formula: pt × (4/3) / 16 = rem   e.g. 72pt = 96px = 6rem
      fontSize: {
        // Contact Us title  — 72 pt Bebas Neue
        "contact":   ["6rem",    { lineHeight: "1",    fontWeight: "400" }],
        // Header 1          — 36 pt Bold Raleway
        "h1":        ["3rem",    { lineHeight: "1.15", fontWeight: "700" }],
        // Header 2          — 32 pt Bold Raleway
        "h2":        ["2.667rem",{ lineHeight: "1.2",  fontWeight: "700" }],
        // Paragraph 1       — 24 pt Bold/Medium Raleway
        "p1":        ["2rem",    { lineHeight: "1.5",  fontWeight: "500" }],
        // Footer 1          — 18 pt Bold Raleway
        "footer1":   ["1.5rem",  { lineHeight: "1.4",  fontWeight: "700" }],
      },

      // ── FONT WEIGHTS ──────────────────────────────────────────────
      fontWeight: {
        medium: "500",
        bold:   "700",
      },

    },
  },
  plugins: [],
};