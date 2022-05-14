const path = require('path');
const mix = require('laravel-mix')
require('dotenv').config({ path: path.resolve(__dirname, './../../.env') })

const arJsPage = [
    'src/js/app.js',
]

const arCssPage = [
    'src/css/app.css',
]

mix.webpackConfig({
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules')
        ]
    }
})

arJsPage.forEach(sJsPage => {
    mix.js(sJsPage, 'js')
})

arCssPage.forEach(sCssPage => {
    mix.postCss(sCssPage, 'css', [
        require("tailwindcss"),
    ])
})

mix.options({
    clearConsole: true,
});

mix.setPublicPath('assets')
mix.setResourceRoot('/themes/' + process.env.ACTIVE_THEME + '/assets')

mix.disableNotifications()

mix.browserSync({
    proxy: process.env.APP_URL,
    host: process.env.APP_URL,
    browser: 'google chrome',
    notify: false,
    files: ["/src/css/*.css", "./**/*.htm", "/src/js/**/*.js"]
})