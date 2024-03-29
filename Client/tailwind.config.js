/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#eee',
                secondary: '#2d2d2d',
                price: '#d01345'
            },
            margin: {
                sideBar: '250px'
            },
            padding: {
                siderInfo: '39px',
                'custom-2': '64px'
            },
            width: {
                sideBar: '250px'
            }
        }
    },
    plugins: []
};
