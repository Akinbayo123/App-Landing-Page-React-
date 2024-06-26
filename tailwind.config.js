/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px'
        },
        extend: {
            colors: {
                brightRed: 'hsl(12,88%,59%)',
                brightRedLight: 'hsl(12,88%,69%)',
                brightRedSupLight: 'hsl(12,88%,95%)',
                darkBlue: 'hsl(288,39%,23%)',
                darkGreyishBlue: 'hsl(277,12%,61%)',
                veryDarkBlue: 'hsl(233,12%,13%)',
                veryPaleRed: 'hsl(13,100%,96%)',
                veryLightGrey: 'hsl(0,0%,98%)',
            }
        },
    },
    plugins: [],
}