/**
 * Relucent TailwindCSS Preset.
 *
 * @package   Relucent\TailwindCSSPreset
 * @license   Proprietary
 * @copyright 2022 Relucent Ltd
 * @link      https://relucent.dev
 * @since     1.0.0
 */

import colors, { palettes } from "@relucent-software/colors";
const defaultTheme = require("tailwindcss/defaultTheme");

const tailwindPreset = {
  theme: {
    fontFamily: {
      serif: [
        '"Lora", serif',
        '"Georgia", serif',
        ...defaultTheme.fontFamily.serif,
      ],
      sans: [
        '"Source Sans Pro", sans-serif',
        '"Verdana", sans-serif',
        ...defaultTheme.fontFamily.sans,
      ],
      display: [
        '"Montserrat", sans-serif',
        '"Arial", sans-serif',
        ...defaultTheme.fontFamily.sans,
      ],
      mono: defaultTheme.fontFamily.mono,
    },
    extend: {
      colors: {
        ...colors,
        ...palettes,
      },
    },
  },
};

export default tailwindPreset;
