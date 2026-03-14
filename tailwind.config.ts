import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "on-error-container": "#ffdad6",
        "secondary": "#d7c4a5",
        "on-error": "#690005",
        "secondary-fixed": "#f4e0bf",
        "on-primary": "#412d00",
        "primary-fixed": "#ffdea5",
        "inverse-on-surface": "#313030",
        "on-primary-container": "#4e3700",
        "surface-container-highest": "#353534",
        "outline-variant": "#4e4639",
        "tertiary": "#e7c188",
        "error": "#ffb4ab",
        "tertiary-fixed-dim": "#e7c188",
        "on-surface-variant": "#d1c5b4",
        "on-tertiary-container": "#4f370a",
        "on-primary-fixed": "#261900",
        "primary-fixed-dim": "#e9c176",
        "surface": "#131313",
        "secondary-container": "#55472f",
        "primary-container": "#c5a059",
        "on-secondary-fixed": "#241a06",
        "surface-container-high": "#2a2a2a",
        "tertiary-fixed": "#ffdeae",
        "on-background": "#e5e2e1",
        "surface-variant": "#353534",
        "tertiary-container": "#c3a06a",
        "on-secondary-container": "#c9b697",
        "surface-bright": "#393939",
        "on-secondary-fixed-variant": "#52452d",
        "primary": "#e9c176",
        "surface-dim": "#131313",
        "on-tertiary": "#432c01",
        "on-primary-fixed-variant": "#5d4201",
        "inverse-primary": "#775a19",
        "surface-container": "#201f1f",
        "inverse-surface": "#e5e2e1",
        "error-container": "#93000a",
        "on-secondary": "#3a2f19",
        "secondary-fixed-dim": "#d7c4a5",
        "background": "#131313",
        "on-surface": "#e5e2e1",
        "surface-container-low": "#1c1b1b",
        "on-tertiary-fixed": "#281800",
        "outline": "#9a8f80",
        "on-tertiary-fixed-variant": "#5c4215",
        "surface-tint": "#e9c176",
        "surface-container-lowest": "#0e0e0e"
      },
      fontFamily: {
        "headline": ["Noto Kufi Arabic", "Manrope", "sans-serif"],
        "body": ["Noto Kufi Arabic", "Manrope", "sans-serif"],
        "label": ["Noto Kufi Arabic", "Manrope", "sans-serif"]
      },
      borderRadius: {"DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem"},
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
};
export default config;
