const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,html}'],
    theme: {
        extend: {},
    },
    plugins: [
        require('daisyui'),
    ],
    daisyui: {
        themes: ["lemonade"],
    },
};
