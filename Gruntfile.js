module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        mkdir: {
            all: {
                options: {create: ['export', 'export/docs', 'export/js', 'export/js/assembled', 'export/locale', 'export/package', 'export/qt', 'export/src', 'export/tools', 'dist']
            }},
            prepare: {
                options: {create: ['js/output', 'js/output/reports', 'js/output/js', 'js/output/dyncode', 'js/output/test', 'js/output/jsdoc']
            }}
        },
        copy: {dist: {files: [{cwd:"export", src: ["**/*"], dest: 'dist', expand: true}]}},
        shell: {
            mkli: {
                command: 'cd js/data; node ../../tools/build/mkli.js'
            },
            touch_localeinfoStamp: {
                command:'cd js/data/locale; touch localeinfo.stamp'
            },
            compressJson: {
                command: 'cd js; node ../../tools/build/jsoncompress.js . locale/'
            },
            touch_compressJsonStamp: {
                command:'cd js/data/locale; touch jsoncompress.stamp'
            },
            gen_manifest_locale: {
                command:'cd js/locale; node ../../tools/build/mkmf.js'
            },
            uglifyfile: {
                command: 'node_modules/uglify-js/bin/uglifyjs js/output/js/ilib.js -o js/output/dyncode/ilib.js --no-mangle-functions'
            },
            qmlizer: {
                command: 'node tools/qmlizer/qmlizer.js js/output/dyncode/ilib.js js/output/dyncode/ilib.js'
            },
            runNodeunitAll: {
                command: options => './js/test/runNodeunit.sh ' + options,
            },
            runNodeunit: {
                command: options => './js/test/runNodeunit.sh ' + options,
            },
            testRemote: {
                command: 'cd js; ../node_modules/http-server/bin/http-server -p 9090 -o'
            }
        },
        compress: {
            tgz: {
                options: {archive: "dist/ilib.tgz"},
                files: [{expand:true, cwd: 'export', src: ["package/*"]}]
            },
            fulltgz: {
                options: {archive: "dist/ilib-<%= pkg.version %>.tgz"},
                files: [{expand:true, cwd: 'export', src: ["js/*", "java/*", "locale/*", "qt/*"]}]
            },
            nodezip: {
                options: {archive: 'dist/ilib-<%= pkg.version %>.zip'},
                files: [{expand:true, cwd: 'export', src: ['js/*', 'java/*', 'locale/*', 'qt/*']}]
            },
            srczip: {
                options: {archive: 'dist/ilib-<%= pkg.version %>-src.zip'},
                files: [
                    {expand:true, cwd: 'export', src: ['js/*', 'tools/*', 'build.properties', 'build.xml']},
                    {expand:true, src: ['build.properties', 'build.xml']}
                ]
            },
            srctgz: {
                options: {archive: 'dist/ilib-<%= pkg.version %>-src.tgz'},
                files: [
                    {expand:true, cwd: 'export', src: ['js/*', 'tools/*', 'build.properties', 'build.xml']},
                    {expand:true, src: ['build.properties', 'build.xml']}
                ]
            },
            doczip: {
                options: {archive: 'dist/ilib-<%= pkg.version %>-doc.zip'},
                files: [{expand:true, cwd: 'export/docs', src: ['jsdoc/*']}]
            },
             doctgz: {
                options: {archive: 'dist/ilib-<%= pkg.version %>-doc.tgz'},
                files: [{expand:true, cwd: 'export/docs', src: ['jsdoc/*']}]
            }
        },
        md5sum: {
            build: {
                files: [{
                    cwd: "dist/",
                    src: ["*.{tgz,zip,jar}"],
                    dest: 'dist/checksum.md5'
                }]
            }
        },
        clean: {
            all : ['dist', 'export', 'js/output', 'js/locale', 'js/package.json', 'docs/demo/demo.tgz', 'docs/demo/scripts/ilib-demo.js' ]
        },
        replace: {
            ilibVersion: {
                src: ['js/lib/ilib.js'],
                dest: 'js/output/js/',
                replacements: [{
                    from: '// !macro ilibVersion',
                    to: '"<%= pkg.version %>"'
                }]
            }
        },
        uglify: {
            all: {
                options: {
                    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +'<%= grunt.template.today("yyyy-mm-dd") %> */',
                    mangle: false
                },
                files: [ {
                    expand: true,
                    cwd: 'js/lib/',
                    src: ['*.js', '!ilib.js', '!ilib-*.js', '!externs.js', 'datefmtstr.js', '!ilib-node*.js','!ilib-stubs*','!ilib-web.js','!ilib-qt.js'],
                    dest: 'js/output/dyncode/',
                }]
            }
        },
        jsdoc: {
            api_doc: {
                src: ['js/lib/*.js', 'README.md'], // !src/**/nls/**/*.js
                options: {
                    ignoreWarnings: true,
                    destination: 'js/output/jsdoc'
                }
            }
        },
        eslint: {
            check: {
             src: ['js/lib/*.js']
            }
        }
  });


    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-move');
    grunt.loadNpmTasks('grunt-md5sum');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-eslint');

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('dist', ['compress', 'md5sum']);
    grunt.registerTask('build', ['shell:mkli', 'shell:touch_localeinfoStamp', 'shell:compressJson', 'shell:touch_compressJsonStamp' ]);

    grunt.registerTask('clean', ['clean:all']);

    grunt.registerTask('default', ['test']);
    grunt.registerTask('uglifyFiles', ['replace:ilibVersion', 'shell:uglifyfile', 'shell:qmlizer', 'uglify:all']);

    // Test Run
    grunt.registerTask('test_dynamic_uncompiled_nu_sync', ['shell:runNodeunitAll:all dynamic uncompiled sync']);
    grunt.registerTask('test_dynamic_uncompiled_nu_async', ['shell:runNodeunitAll:all dynamic uncompiled async']);

    grunt.registerTask('test_dynamic_compiled_nu_sync', ['shell:runNodeunitAll:all dynamic compiled sync']);
    grunt.registerTask('test_dynamic_compiled_nu_async', ['shell:runNodeunitAll:all dynamic compiled async']);

    grunt.registerTask('test_assembled_uncompiled_nu_sync', ['shell:runNodeunitAll:all assembled uncompiled sync']);
    grunt.registerTask('test_assembled_uncompiled_nu_async', ['shell:runNodeunitAll:all assembled uncompiled async']);

    grunt.registerTask('test_assembled_compiled_nu_sync', ['shell:runNodeunitAll:all assembled compiled sync']);
    grunt.registerTask('test_assembled_compiled_nu_async', ['shell:runNodeunitAll:all assembled compiled async']);

    grunt.registerTask('test_dyndata_uncompiled_nu_sync', ['shell:runNodeunitAll:all dynamicdata uncompiled sync']);
    grunt.registerTask('test_dyndata_uncompiled_nu_async', ['shell:runNodeunitAll:all dynamicdata uncompiled async']);

    grunt.registerTask('test_dyndata_compiled_nu_sync', ['shell:runNodeunitAll:all dynamicdata compiled sync']);
    grunt.registerTask('test_dyndata_compiled_nu_async', ['shell:runNodeunitAll:all dynamicdata compiled async']);

    grunt.registerTask('test_all_nu', ['test_dynamic_uncompiled_nu_sync','test_dynamic_uncompiled_nu_async','test_dynamic_compiled_nu_sync','test_dynamic_compiled_nu_async', 'test_assembled_uncompiled_nu_sync', 'test_assembled_uncompiled_nu_async', 'test_assembled_compiled_nu_sync', 'test_assembled_compiled_nu_async','test_dyndata_uncompiled_nu_sync', 'test_dyndata_uncompiled_nu_async', 'test_dyndata_compiled_nu_sync', 'test_dyndata_compiled_nu_async' ])

    grunt.registerTask('test_address_nu_sync', ['shell:runNodeunit:sync address']);
    grunt.registerTask('test_calendar_nu_sync', ['shell:runNodeunit:sync calendar']);
    grunt.registerTask('test_collate_nu_sync', ['shell:runNodeunit:sync collate']);
    grunt.registerTask('test_ctype_nu_sync', ['shell:runNodeunit:sync ctype']);
    grunt.registerTask('test_date_nu_sync', ['shell:runNodeunit:sync date']);
    grunt.registerTask('test_daterange_nu_sync', ['shell:runNodeunit:sync daterange']);
    grunt.registerTask('test_durfmt_nu_sync', ['shell:runNodeunit:sync durfmt']);
    grunt.registerTask('test_name_nu_sync', ['shell:runNodeunit:sync name']);
    grunt.registerTask('test_number_nu_sync', ['shell:runNodeunit:sync number']);
    grunt.registerTask('test_maps_nu_sync', ['shell:runNodeunit:sync maps']);
    grunt.registerTask('test_phone_nu_sync', ['shell:runNodeunit:sync phone']);
    grunt.registerTask('test_root_nu_sync', ['shell:runNodeunit:sync root']);
    grunt.registerTask('test_strings-ext_nu_sync', ['shell:runNodeunit:sync strings-ext']);
    grunt.registerTask('test_units_nu_sync', ['shell:runNodeunit:sync units']);
    grunt.registerTask('test_util_nu_sync', ['shell:runNodeunit:sync util']);

    grunt.registerTask('test_address_nu_async', ['shell:runNodeunit:async address']);
    grunt.registerTask('test_calendar_nu_async', ['shell:runNodeunit:async calendar']);
    grunt.registerTask('test_collate_nu_async', ['shell:runNodeunit:async collate']);
    grunt.registerTask('test_ctype_nu_async', ['shell:runNodeunit:async ctype']);
    grunt.registerTask('test_date_nu_async', ['shell:runNodeunit:async date']);
    grunt.registerTask('test_daterange_nu_async', ['shell:runNodeunit:async daterange']);
    grunt.registerTask('test_durfmt_nu_async', ['shell:runNodeunit:async durfmt']);
    grunt.registerTask('test_name_nu_async', ['shell:runNodeunit:async name']);
    grunt.registerTask('test_number_nu_async', ['shell:runNodeunit:async number']);
    grunt.registerTask('test_maps_nu_async', ['shell:runNodeunit:async maps']);
    grunt.registerTask('test_phone_nu_async', ['shell:runNodeunit:async phone']);
    grunt.registerTask('test_root_nu_async', ['shell:runNodeunit:async root']);
    grunt.registerTask('test_strings-ext_nu_async', ['shell:runNodeunit:async strings-ext']);
    grunt.registerTask('test_units_nu_async', ['shell:runNodeunit:async units']);
    grunt.registerTask('test_util_nu_async', ['shell:runNodeunit:async util']);

    grunt.registerTask('test_address_nu_debug', ['shell:runNodeunit:debug address']);
    grunt.registerTask('test_calendar_nu_debug', ['shell:runNodeunit:debug calendar']);
    grunt.registerTask('test_collate_nu_debug', ['shell:runNodeunit:debug collate']);
    grunt.registerTask('test_ctype_nu_debug', ['shell:runNodeunit:debug ctype']);
    grunt.registerTask('test_date_nu_debug', ['shell:runNodeunit:debug date']);
    grunt.registerTask('test_daterange_nu_debug', ['shell:runNodeunit:debug daterange']);
    grunt.registerTask('test_durfmt_nu_debug', ['shell:runNodeunit:debug durfmt']);
    grunt.registerTask('test_name_nu_debug', ['shell:runNodeunit:debug name']);
    grunt.registerTask('test_number_nu_debug', ['shell:runNodeunit:debug number']);
    grunt.registerTask('test_maps_nu_debug', ['shell:runNodeunit:debug maps']);
    grunt.registerTask('test_phone_nu_debug', ['shell:runNodeunit:debug phone']);
    grunt.registerTask('test_root_nu_debug', ['shell:runNodeunit:debug root']);
    grunt.registerTask('test_strings-ext_nu_debug', ['shell:runNodeunit:debug strings-ext']);
    grunt.registerTask('test_units_nu_debug', ['shell:runNodeunit:debug units']);
    grunt.registerTask('test_util_nu_debug', ['shell:runNodeunit:debug util']);

    grunt.registerTask('test_Remote', ['shell:testRemote']);

};
