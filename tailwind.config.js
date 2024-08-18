/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // screen sizes
      screens: {
        xxs: '320px', // Custom breakpoint for extra small devices
        xs: '480px', // Extra small devices (phones)
        sm: '640px', // Small devices (tablets)
        md: '730px', // Medium devices (small laptops)
       'mmd': '850px',   // Medium devices (small laptops)
        lg: '1024px', // Large devices (desktops)
        xl: '1280px', // Extra large devices (large desktops)
        '2xl': '1536px', // 2x large devices (very large screens)
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },

      colors: {
        sidebarColor: '#0c0f12',
        mainColor: '#12161b',
        sideScrollColor: '#181e25',
      },
    },
  },
  plugins: [],
};
