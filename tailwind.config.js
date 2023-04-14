module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            fontFamily: {
                'Libre': ['"Libre Baskerville"', 'serif'],
                'Montserrat': ['"Montserrat"', 'sans-serif'],
                'Oswald': ['"Oswald', 'sans-serif']
            },
            colors: {
                'custom-blue': '#6BBFC5'
            },
            backgroundImage: {
                'hero': "url('/src/assets/images/clinica.jpg')",
            }
        },
    },
    plugins: [],
}