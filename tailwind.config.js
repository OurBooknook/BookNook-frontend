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
                gray: '#a0a0a0',
                lightGray: '#d7d7d7',
            },
            fontFamily: {
                pretendard: ['Pretendard'],
                danjo: ['Danjo'],
            },
        },
    },
    plugins: [],
}
