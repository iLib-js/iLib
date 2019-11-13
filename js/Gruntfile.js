/**
 * Gruntfile.js - build the ilib javascript project
 *
 * @license
 * Copyright © 2019, JEDLSoft
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

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        mkdir: {
            prepare: {
                options: {
                    create: [
                        'locale',
                        'output',
                        'output/reports',
                        'output/js',
                        'output/dyncode',
                        'output/dyncode/lib',
                        'output/dyncode/src/lib',
                        'output/test',
                        'output/jsdoc'
                   ]
                }
            }
        },
        copy: {
            src: {
                files: [{
                    cwd:"lib",
                    src: [
                        "**/*.js",
                        "!**/ilib.js",
                        '!**/ilib-*.js',
                        '!externs.js',
                        '!datefmtstr.js',
                        '!ilib-stubs*',
                        "!**/metafiles/*"
                    ],
                    dest: 'output/dyncode/src/lib',
                    expand: true
                },{
                    cwd:"lib",
                    src: [
                        "ilib-node*",
                        "ilib-qt*",
                        "ilib-webpack*",
                        "ilib-unpack.js",
                        "ilib-web.js"
                    ],
                    dest: 'output/dyncode/src/lib',
                    expand: true
                },{
                    src: [
                        "index.js"
                    ],
                    dest: 'output/dyncode/src',
                    expand: true
                }]
            }
        },
        replace: {
            version: {
                src: [
                    "lib/ilib.js"
                ],
                dest: "output/dyncode/src/lib/ilib.js",
                replacements: [{
                    from: '// !macro ilibVersion',
                    to: '"<%= pkg.version %>"'
                }]
            }
        },
        uglify: {
            lib: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                    mangle: false,
                    sourceMap: true,
                    output: {
                        comments: "/(\!data|\!loadLocaleData|\!defineLocaleData|\!macro|eslint-)/"
                    }
                },
                files: [{
                    expand: true,
                    cwd: 'output/dyncode/src',
                    src: [
                        '**/*.js'
                    ],
                    dest: 'output/dyncode'
                }]
            }
        },
        clean: {
            dist: ['lib']
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mkdir');

    // Default task(s).
    // grunt.registerTask('default', ['uglify']);
    // grunt.registerMultiTask('mkdir', ['mkdir']);
    // grunt.registerMultiTask('copy', ['copy']);
    grunt.registerTask('uglifypkg', ['mkdir:prepare', 'copy:src', 'replace:version', 'uglify:lib']);
};
