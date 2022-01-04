const path = require('path');
const webpack = require('webpack');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');

module.exports = {

    resolve: {
        alias: {
             'resources/js': path.resolve('resources/js'),
        },

    },

    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'resources/images',
                    to: 'images',
                },
            ],
        }),
        new ImageminPlugin({
            disable: process.env.NODE_ENV !== 'production',
            test: /\.(jpe?g|png|gif|svg)$/i,
            plugins: [
                imageminMozjpeg({
                    quality: 75,
                    progressive: true
                }),
                imageminPngquant({
                    quality: [0.6, 0.8],
                    speed: 1,
                })
            ],
        }),
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: false,
        })
    ]

};
