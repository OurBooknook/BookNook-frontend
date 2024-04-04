/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/flowbite/**/*.js',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1E863B',
            },
            fontFamily: {
                pretendard: ['Pretendard'],
                danjo: ['Danjo'],
            },
        },
    },
    plugins: [],
}