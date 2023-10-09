module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Include all JavaScript and TypeScript files in the 'src' directory.
    './public/index.html', // Include the HTML file.
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ed1e79',
        secondary: '#cb1063',
        tertiary: '#cccccc',
        quaternary: '#f7c2be',
        quinary: '#e01507',
        black: '#000000',
        gray: '#4b5563',
        lightGray: '#c1efe0',
        lightPink: '#fbc9e1',
        lightYellow: '#ffeaca',
        orange: '#ffa826',
      },
      textColor: {
        primary: '#ed1e79',
        secondary: '#cb1063',
        // Define more custom text colors if needed.
      },
      backgroundColor: {
        primary: '#ed1e79',
        secondary: '#cb1063',
        // Define more custom background colors if needed.
      },
    },
  },
  plugins: [
    // Add Tailwind CSS plugins here if needed.
  ],
};
