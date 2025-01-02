import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

// Define __dirname for ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {
      config: join(__dirname, 'tailwind.config.ts'),
    },
    autoprefixer: {},
  },
}

export default config
