/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        // xs: ['0.25rem', '0.35rem'],
        // sm: ['0.35rem', '0.45rem'],
        // base: ['0.42rem', '0.52rem'],
        // lg: ['0.55rem', '0.65rem'],
        // xl: ['0.65rem', '0.75rem'],
      },
      colors: {
        primary: '#041b47',
        'dark-primary': '#f2ddcc',
      },
      zIndex: {
        lowest: -1,
        layer0: 0,
        layer1: 10,
        layer2: 20,
        layer3: 30,
        topest: 99,
      },
    },
  },
  plugins: [require('daisyui')],

  // daisyUI config (optional - here are the default values)
  daisyui: {
    prefix: 'ui-', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    themes: ['light', 'dark', 'valentine', 'cupcake', 'winter', 'lemonade'], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    // darkTheme: "dark", // name of one of the included themes for dark mode
    // base: true, // applies background color and foreground color for root element by default
    // styled: true, // include daisyUI colors and design decisions for all components
    // utils: true, // adds responsive and modifier utility classes
    // logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    // themeRoot: ":root", // The element that receives theme color CSS variables
  },
}
