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
                primaryVariant: '#FFFDEE',
                accent: '#F7F6BB',
                gray: '#a0a0a0',
                lightGray: '#d7d7d7',
                kakao: '#FEE500',
                naver: '#02C75A',
            },
            fontFamily: {
                pretendard: ['Pretendard'],
                danjo: ['Danjo'],
            },
        },
    },
    plugins: [],
}
