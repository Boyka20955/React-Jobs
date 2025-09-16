/** @type {import('tailwindcss').config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
            },
           gridTemplateColumns:{
            '70/30': '70% 28%',
           } 
        },
    },
    plugins: [],
}