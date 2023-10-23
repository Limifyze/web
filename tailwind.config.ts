import type { Config } from "tailwindcss"
import colors from "tailwindcss/colors"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/cms.ts",
  ],
  theme: {
    colors: {
      ...colors,
      primary: {
        100: "#F7FDE7",
        200: "#E6FAB7",
        300: "#D1F77E",
        400: "#B8F236",
        500: "#9CDC0E", // default
        600: "#7AAD0B",
        700: "#638B09",
        800: "#527307",
        900: "#446006",
      },
      fontFamily: {
        sans: "Open Sans",
      },
      extend: {},
    },
  },
  plugins: [],
}
export default config
