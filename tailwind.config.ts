import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "gray-light": "#ecf0f3",
        "blue-dark":"#1f2937",
        "purple-dark":"#5651e5",
        "blue-light":"#709dff"
      },
      minWidth:{
        '3':"0.75rem"
      }
    },
  },
  plugins: [],
}
export default config
