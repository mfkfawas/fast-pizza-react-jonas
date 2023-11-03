// https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // adding anything(eg fontFamily, colors) inside theme will override the default tailwind corr properties. So we cannot
    // use default classes.
    fontFamily: {
      pizza: 'Roboto Mono, monospace',
    },
    // adding anything(eg fontFamily, colors) inside extend will not override the default tailwind corr properties. So we can
    // use default classes and extended classes too.
    extend: {
      colors: {
        pizza: '#123456',
      },
      fontSize: {
        huge: ['80rem', { lineHeight: '1' }],
      },
      height: {
        // h-screen already exist so now it will override it. Tailwind def h-screen val is 100vh but now we can use dvh units which is
        // more modern and solve the issue of mobile browsers with 100vh.
        screen: '100dvh',
      },
    },
  },
  plugins: [],
};
