
const mix = require('laravel-mix');
const glob = require('glob');
require('@chiiya/laravel-mix-imagemin');



let production = mix.inProduction();


// ------------- Don't generate license file --------------

mix.options({
    terser: {
        extractComments: false,
    }
});


// ------------- Js glob --------------

let jsFiles = glob.sync('resources/js/**/*.js', {"ignore": 'resources/js/includes/**'});

let length = jsFiles.length;

for(let i = 0; i < length; i++) {

    mix.js(jsFiles[i], jsFiles[i].replace('resources', 'public'));
}


// ------------- Scss glob --------------

let scssFiles = glob.sync('resources/sass/**/*.scss', {"ignore": 'resources/sass/includes/**'});

length = scssFiles.length;

for(let i = 0; i < length; i++) {

    mix.sass(scssFiles[i], scssFiles[i].replace('resources/sass', 'public/css').replace('.scss', '.css')).options({
        processCssUrls: false
    });
}


// ------------- Other --------------

mix.imagemin({
        patterns: [
            {
                from: '**/*',
                to: 'images',
                context: 'resources/images',
            },
        ],
    },
    {
        pngquant: {
            quality: '95-100'
        }
    },
    // {plugins: [
    //     imageminMozjpeg({
    //         quality: 100,
    //         progressive: true
    //     })
    // ]}
    )
    .webpackConfig(require('./webpack.config'))
    .sourceMaps(!production, 'source-map')
    .disableNotifications()
    .browserSync({
        proxy: 'crm-hpi',
        host: 'crm-hpi',
        notify: false,
        open: 'external'
    });

if (production) {
    mix.version();
    //mix.version(['public/images', 'public/Admin/**/*.{js,css,png,jpg,gif,svg}']);
}



