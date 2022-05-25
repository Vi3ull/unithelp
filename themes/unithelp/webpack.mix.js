const glob = require('glob');
const path = require('path');;
const mix = require('laravel-mix')

const jsArr = glob
.sync( 'src/components/*.js' )
.filter( file => path.basename( file ).substr(0, 1) !== '_' );

const cssArr = glob
.sync( 'src/components/*.scss' )
.filter( file => path.basename( file ).substr(0, 1) !== '_' );

require('dotenv').config({ path: path.resolve(__dirname, './../../.env') })


mix.babelConfig({
    plugins: ['@babel/plugin-syntax-dynamic-import'],
})

mix.alias({
    '@c': path.join(__dirname, './src/components')
})

mix.copy('./src/img', 'assets/img')

mix.webpackConfig({
    output: {
        publicPath: '/themes/unithelp/assets',
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules')
        ]
    }
})

jsArr.forEach( item => mix.js( item, 'js') );
cssArr.forEach( item => mix.sass( item, 'css') );

mix.options({
    clearConsole: true,
    postCss: [ 
        require('tailwindcss')('./tailwind.config.js'),
        require('autoprefixer')({
            cascade: false,
        }),
    ],
});

mix.setPublicPath('assets')
mix.setResourceRoot('/themes/' + process.env.ACTIVE_THEME + '/assets')

mix.disableNotifications()

mix.version()

mix.browserSync({
    proxy: process.env.APP_URL,
    host: process.env.APP_URL,
    browser: 'google chrome',
    notify: false,
    // files: ["/src/css/*.css", "./**/*.htm", "/src/js/**/*.js"]
    files: [
        './assets/**/*',
        './**/*.htm',
    ]
})