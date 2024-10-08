//@ts-nocheck

import type { Config } from "tailwindcss";

import { colors, tokens, typography } from "@hdc-ui/foundations";

const fontSize = {};

Object.entries(typography).forEach(([key, { fontSize: size, ...values }]) => {
  fontSize[key] = [size, values];
});

const config: Config = {
  mode: "jit", // JIT 모드 활성화
  content: [
    "./desktop/**/*.{js,ts,jsx,tsx,mdx}",
    "./mobile/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  "tailwindcss/nesting": "postcss-nesting",

  "postcss-preset-env": {
    features: {
      "nesting-rules": false,
    },
  },

  ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),

  theme: {
    fontFamily: {
      sans: ["Pretendard"],
    },
    extend: {
      colors,
      fontSize,
      tokens,
      keyframes: {
        fadeInDown: {
          "0%": {
            opacity: 0,
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
      },
      animation: {
        fadeInDown: "fadeInDown 600ms ease-in-out",
      },
    },
    screens: {
      mobile: "768px",
      tablet: "1200px",
      desktop: "1600px",
    },
  },
  plugins: [],
};
export default config;
