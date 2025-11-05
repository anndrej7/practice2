import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "0px",
      sm: "766px",
      md: "767px",
      from834: "834px",
      lg: "1024px",
      xl: "1200px",
    },
    extend: {
      colors: {
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
        cabin: {
          brown: '#8B4513',
          orange: '#FF8C42',
          green: '#2F4F2F',
          blue: '#4682B4',
          beige: '#F5F5DC',
          warm: '#DEB887',
          dark: '#654321',
          light: '#FDF5E6',
        }
      },
      fontFamily: {
        'plus-jakarta': ['PlusJakarta', 'sans-serif'],
      },
      backgroundImage: {
        'cabin-gradient': 'linear-gradient(135deg, #FDF5E6 0%, #FEFBF3 100%)',
        'nature-gradient': 'linear-gradient(135deg, #E8F5E8 0%, #F0F8F0 100%)',
        'cabin-dark': 'linear-gradient(135deg, #8B4513 0%, #654321 100%)',
      }
    },
  },
  plugins: [],
};

export default config;
