import prettierConfig from '../../.prettierrc.mjs'

/**
 * @type {import("prettier").Config}
 */
const config = {
  ...prettierConfig,
}

export default config

// const prettierConfig = {
//   singleQuote: true,
//   trailingComma: 'es5',
//   semi: false,
//   plugins: ['prettier-plugin-tailwindcss'],
// }

// export default prettierConfig
