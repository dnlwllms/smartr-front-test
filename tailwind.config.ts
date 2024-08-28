//@ts-nocheck

import type { Config } from "tailwindcss";

import { colors, tokens, typography } from "@hdc-ui/foundations";

const fontSize = {};

Object.entries(typography).forEach(([key, { fontSize: size, ...values }]) => {
  fontSize[key] = [size, values];
});

const config: Config = {
  content: [
    "./desktop/src/**/*.{js,ts,jsx,tsx,mdx}",
    "./mobile/src/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  "tailwindcss/nesting": "postcss-nesting",
  "postcss-preset-env": {
    features: { "nesting-rules": false },
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
    },
  },
  plugins: [],
};
export default config;
