import { createGlobPatternsForDependencies } from '@nx/react/tailwind'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import type { Config } from 'tailwindcss'

// Define __dirname for ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const config: Config = {
  // content: [
  //   "./src/**/*.{js,ts,jsx,tsx,mdx}",
  //   "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  //   "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  //   "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  // ],

  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],

  theme: {
    extend: {
      colors: {
        primary: '#FC8A06',
        secondary: '#03081F',
        secondaryTint: '#12172c',
        textTint: '#78716c',
        background: 'rgb(245 245 244)',
        backgroundShade1: '#ebebea',
        backgroundShade2: '#e6e6e5',
        backgroundBorder: 'rgb(214 211 209)',
        textColorTint: '#78716c', //text-stone-500
      },
    },
  },
  plugins: [],
}
export default config
