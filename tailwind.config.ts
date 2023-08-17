import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': '#081229',
        'btn-blue': '#191d3a',
        'primary': '#0e101c',
        'secondary': '#bf1650',
        'light-pink': '#ec5990',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      rotate: {
        '135': '135deg',
      },
    },
  },
  plugins: [],
}
export default config
