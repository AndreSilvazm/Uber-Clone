import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    fontFamily:{

      "inter":["Inter", 'sans-serif']

    },

    extend: {

      colors:{

        Grey: '#374151',
        CarsColor: '#F1F5F9'

      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "SecondLand":"url('/Imagens/bg-city.png')",
        "LandingPage":"url('/Imagens/bguber.png')",

      },
    },
  },
  plugins: [],
};
export default config;
