/*
 * webpack.config.js - configuration script for webpack
 * 
 * Copyright © 2017, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './lib/ilib-standard-webpack.js',
    output: {
        filename: 'ilib-standard.js',
        path: path.resolve(__dirname, 'output/js')
    },
    module: {
        rules: [{
            test: /\.js$/, // Run the loader on all .js files
            exclude: /node_modules/, // ignore all files in the node_modules folder
            use: {
                loader: path.resolve('./lib/ilibdata-webpack-loader.js'),
                options: {
                    locales: [
                        "en-AU", "en-CA", "en-GB", "en-IN", "en-NG", "en-PH",
                        "en-PK", "en-US", "en-ZA", "de-DE", "fr-CA", "fr-FR",
                        "es-AR", "es-ES", "es-MX", "id-ID", "it-IT", "ja-JP",
                        "ko-KR", "pt-BR", "ru-RU", "tr-TR", "vi-VN", "zxx-XX",
                        "zh-Hans-CN", "zh-Hant-HK", "zh-Hant-TW", "zh-Hans-SG"
                    ],
                    presets: ['es2015']
                }
            }
        }]
    }
/*
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: 'ilib'
            })
        ]
*/
};