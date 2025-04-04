
module.exports = function(grunt) {
    require('jit-grunt')(grunt, {
        replace: 'grunt-text-replace'
    });

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        mkdir: {
            prepare: {
                options: {create: ['js/locale', 'js/output', 'js/output/reports', 'js/output/js', 'js/output/dyncode', 'js/output/test', 'js/output/jsdoc']
            }},
            export: {
                options: {create: ['export', 'export/docs', 'export/js', 'export/locale', 'export/tools', 'dist']
            }},
            dist: {
                options: {create: ['export/js/assembled','export/js/dyncode', 'export/js/dyncode', 'export/js/jsdoc', 'export/js/jsdoc', 'export/src/js', 'export/package/lib','export/package/locale', 'export/docs/jsdoc']
            }}
        },
        copy: {
            export_locale: {
                files: [{cwd:"js/locale", src: ["**/*.json"], dest: 'export/locale/', expand: true}]
            },
            export_js_assemble: {
                files: [{cwd:"js/output/js", src: ["core-assembled-uncompiled-web/*.js","core-assembled-compiled-web/*.js", "standard-assembled-uncompiled-web/*.js", "standard-assembled-compiled-web/*.js", "full-assembled-uncompiled-web/*.js", "full-assembled-compiled-web/*.js", "core-dynamicdata-uncompiled-web/*.js", "core-dynamicdata-compiled-web/*.js", "standard-dynamicdata-uncompiled-web/*.js", "standard-dynamicdata-compiled-web/*.js", "full-dynamicdata-uncompiled-web/*.js", "full-dynamicdata-compiled-web/*.js"], dest: 'export/js/assembled/', expand: true}]
            },
            export_dyncode: {
                files: [{cwd:"js/output/dyncode", src: ["**/*.js"], dest: 'export/js/dyncode/', expand: true}]
            },
            export_jsdoc: {
                files: [{cwd:"js/output/jsdoc", src: ["**"], dest: 'export/docs/jsdoc/', expand: true}]
            },
            export_package_lib: {
                files: [{cwd:"export/js/dyncode", src: ["**", '!ilib-web.js', '!ilib-qt.js', '!ilib-rhino.js', '!ilib-enyo.js', '!QMLLoader.js', '!WebLoader.js'], dest: 'export/package/lib/', expand: true}]
            },
            export_package_locale: {
                files: [{cwd:"js/locale", src: ["**"], dest: 'export/package/locale/', expand: true}]
            },
            export_package: {
                files: [{cwd:"js", src: ["../README.md", 'package.json'], dest: 'export/package/', expand: true}]
            },
        },
        shell: {
            node_option: {
                command: 'echo export NODE_OPTIONS="--max-old-space-size=3072"'
            },
            copy_pkgJson: {
                command: 'cp js/package.json .'
            },
            mkli: {
                command: 'cd js/data/locale; node ../../../tools/build/mkli.js' // create localeinfo.json
            },
            touch_localeinfoStamp: {
                command:'cd js/data/locale; touch localeinfo.stamp'
            },
            compressJson: {
                command: 'cd js/data/locale; node ../../../tools/build/jsoncompress.js . ../../../js/locale'
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
            },
            run_webpack: {
                command: options => './js/runWebpack.sh ' + options,
            }
        },
        compress: {
            tgz: {
                options: {archive: "dist/ilib.tgz"},
                files: [{expand:true, cwd: 'export', src: ["package/*"]}]
            },
            fulltgz: {
                options: {archive: "dist/ilib-<%= pkg.version %>.tgz"},
                files: [{expand:true, cwd: 'export', src: ["js/*", "java/*", "locale/*"]}]
            },
            nodezip: {
                options: {archive: 'dist/ilib-<%= pkg.version %>.zip'},
                files: [{expand:true, cwd: 'export', src: ['js/*', 'java/*', 'locale/*']}]
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
            all : ['dist', 'export', 'js/output', 'js/locale', 'js/package.json', 'docs/demo/demo.tgz', 'docs/demo/scripts/ilib-demo.js' ],
            rm_lijson : ['js/**/localeinfo.json']
        },
        replace: {
            ilibVersion: {
                src: ['js/lib/ilib.js'],
                dest: 'js/output/js/',
                replacements: [{
                    from: '// !macro ilibVersion',
                    to: '"<%= pkg.version %>"'
                }]
            },
            pkgVersion: {
                src: ['js/package.json.template'],
                dest: 'js/package.json',
                replacements: [{
                    from: '"@fullversion@"',
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
                    src: ['*.js', '!ilib.js', '!ilib-*.js', '!externs.js', 'datefmtstr.js', '!ilib-node*.js','!ilib-stubs*','!ilib-web.js'],
                    dest: 'js/output/dyncode/',
                }]
            }
        },
        jsdoc: {
            api_doc: {
                src: ['js/lib/*.js', 'README.md'],
                options: {
                    ignoreWarnings: true,
                    destination: 'js/output/jsdoc',
                    private:true
                }
            }
        },
        watch: {
            scripts: {
                files: [],
                taskes: []
            }
        }
    });

    grunt.registerTask('build_jsonWork', ['mkdir:prepare', 'replace:pkgVersion','shell:copy_pkgJson','shell:mkli', 'shell:touch_localeinfoStamp', 'shell:compressJson', 'shell:touch_compressJsonStamp', 'shell:gen_manifest_locale']);
    grunt.registerTask('build_copyJson', ['mkdir:export', 'copy:export_locale']);
    grunt.registerTask('build_core', ['shell:node_option','webpack_assemble_core', 'webpack_assemble_core_compiled', 'webpack_assemble_core_dyndata', 'webpack_assemble_core_dyndata_compiled']);
    grunt.registerTask('build_standard', ['webpack_assemble_standard', 'webpack_assemble_standard_compiled','webpack_assemble_standard_dyndata', 'webpack_assemble_standard_dyndata_compiled']);
    grunt.registerTask('build_full', ['webpack_assemble_full', 'webpack_assemble_full_compiled','webpack_assemble_full_dyndata','webpack_assemble_full_dyndata_compiled' ]);
    grunt.registerTask('build_uglify', ['uglifyFiles'/*, 'jsdoc:api_doc'*/]);
    grunt.registerTask('build_export', ['mkdir:dist', 'copy:export_js_assemble','copy:export_dyncode', 'copy:export_jsdoc', 'copy:export_package','copy:export_package_lib', 'copy:export_package_locale']);

    grunt.registerTask('build_all', ['build_jsonWork', 'build_copyJson', 'build_core', 'build_standard', 'build_full', 'build_uglify', 'build_export']);
    grunt.registerTask('dist', ['compress', 'md5sum']);
    grunt.registerTask('uglifyFiles', ['replace:ilibVersion', 'shell:uglifyfile', 'shell:qmlizer', 'uglify:all']);
    
    grunt.registerTask('default', ['build_all']);
    grunt.registerTask('unittest_build', ['webpack_assemble_unittest', 'webpack_assemble_unittest_compiled','webpack_assemble_unittest_dyndata','webpack_assemble_unittest_dyndata_compiled','webpack_assemble_unittest_node', 'webpack_assemble_unittest_node_compiled', 'webpack_assemble_unittest_dyndata_node', 'webpack_assemble_unittest_dyndata_node_compiled']);


    // Webpack Run
    /*
    <arg value="--env.assembly=@{assembly}"/> . default: assembled
    <arg value="--env.size=@{size}"/>
    <arg value="--env.compilation=@{compilation}"/> default:"uncompiled"
    <arg value="--env.locales=@{locales}"/> default: locales.default
    <arg value="--env.target=@{target}"/> default: target
    <arg value="--env.ilibRoot=${build.base}"/>
    */
    grunt.registerTask('webpack_assemble_core', ['shell:run_webpack:assembly core uncompiled web locales_default']);
    grunt.registerTask('webpack_assemble_core_compiled', ['shell:run_webpack:assembly core compiled web locales_default']);
    grunt.registerTask('webpack_assemble_core_dyndata', ['shell:run_webpack:dynamicdata core uncompiled web locales_default']);
    grunt.registerTask('webpack_assemble_core_dyndata_compiled', ['shell:run_webpack:dynamicdata core compiled web locales_default']);

    grunt.registerTask('webpack_assemble_standard', ['shell:run_webpack:assembly standard uncompiled web locales_default']);
    grunt.registerTask('webpack_assemble_standard_compiled', ['shell:run_webpack:assembly standard compiled web locales_default']);
    grunt.registerTask('webpack_assemble_standard_dyndata', ['shell:run_webpack:dynamicdata standard uncompiled web locales_default']);
    grunt.registerTask('webpack_assemble_standard_dyndata_compiled', ['shell:run_webpack:dynamicdata standard compiled web locales_default']);

    grunt.registerTask('webpack_assemble_full', ['shell:run_webpack:assembly full uncompiled web locales_default']);
    grunt.registerTask('webpack_assemble_full_compiled', ['shell:run_webpack:assembly full compiled web locales_default']);
    grunt.registerTask('webpack_assemble_full_dyndata', ['shell:run_webpack:dynamicdata full uncompiled web locales_default']);
    grunt.registerTask('webpack_assemble_full_dyndata_compiled', ['shell:run_webpack:dynamicdata full compiled web locales_default']);

    grunt.registerTask('webpack_assemble_unittest', ['shell:run_webpack:assembly ut uncompiled web locales_unittest']);
    grunt.registerTask('webpack_assemble_unittest_compiled', ['shell:run_webpack:assembly ut compiled web locales_unittest']);
    grunt.registerTask('webpack_assemble_unittest_dyndata', ['shell:run_webpack:dynamicdata ut uncompiled web locales_unittest']);
    grunt.registerTask('webpack_assemble_unittest_dyndata_compiled', ['shell:run_webpack:dynamicdata ut compiled web locales_unittest']);

    grunt.registerTask('webpack_assemble_unittest_node', ['shell:run_webpack:assembly ut uncompiled node locales_unittest']);
    grunt.registerTask('webpack_assemble_unittest_node_compiled', ['shell:run_webpack:assembly ut compiled node locales_unittest']);
    grunt.registerTask('webpack_assemble_unittest_dyndata_node', ['shell:run_webpack:dynamicdata ut uncompiled node locales_unittest']);
    grunt.registerTask('webpack_assemble_unittest_dyndata_node_compiled', ['shell:run_webpack:dynamicdata ut compiled node locales_unittest']);
    
    grunt.registerTask('webpack_assemble_demo', ['shell:run_webpack:asembly demo uncompiled node locales_demo']);
    grunt.registerTask('webpack_assemble_demo_compiled', ['shell:run_webpack:assembly demo compiled node locales_demo']);
    grunt.registerTask('webpack_assemble_demo_dyndata', ['shell:run_webpack:dynamicdata demo uncompiled node locales_demo']);
    grunt.registerTask('webpack_assemble_demo_dyndata_compiled', ['shell:run_webpack:dynamicdata demo compiled node locales_demo']);

    // Test Run

    grunt.registerTask('test_all', ['test_dynamic_uncompiled_sync','test_dynamic_uncompiled_async','test_dynamic_compiled_sync','test_dynamic_compiled_async', 'test_assembled_uncompiled_sync', 'test_assembled_uncompiled_async', 'test_assembled_compiled_sync', 'test_assembled_compiled_async','test_dyndata_uncompiled_sync', 'test_dyndata_uncompiled_async', 'test_dyndata_compiled_sync', 'test_dyndata_compiled_async' ])
    grunt.registerTask('test_remote', ['shell:testRemote']);

    grunt.registerTask('test_dynamic_uncompiled_sync', ['shell:runNodeunitAll:all dynamic uncompiled sync']);
    grunt.registerTask('test_dynamic_uncompiled_async', ['shell:runNodeunitAll:all dynamic uncompiled async']);

    grunt.registerTask('test_dynamic_compiled_sync', ['shell:runNodeunitAll:all dynamic compiled sync']);
    grunt.registerTask('test_dynamic_compiled_async', ['shell:runNodeunitAll:all dynamic compiled async']);

    grunt.registerTask('test_assembled_uncompiled_sync', ['shell:runNodeunitAll:all assembled uncompiled sync']);
    grunt.registerTask('test_assembled_uncompiled_async', ['shell:runNodeunitAll:all assembled uncompiled async']);

    grunt.registerTask('test_assembled_compiled_sync', ['shell:runNodeunitAll:all assembled compiled sync']);
    grunt.registerTask('test_assembled_compiled_async', ['shell:runNodeunitAll:all assembled compiled async']);

    grunt.registerTask('test_dyndata_uncompiled_sync', ['shell:runNodeunitAll:all dynamicdata uncompiled sync']);
    grunt.registerTask('test_dyndata_uncompiled_async', ['shell:runNodeunitAll:all dynamicdata uncompiled async']);

    grunt.registerTask('test_dyndata_compiled_sync', ['shell:runNodeunitAll:all dynamicdata compiled sync']);
    grunt.registerTask('test_dyndata_compiled_async', ['shell:runNodeunitAll:all dynamicdata compiled async']);

    grunt.registerTask('test_address_sync', ['shell:runNodeunit:sync address']);
    grunt.registerTask('test_calendar_sync', ['shell:runNodeunit:sync calendar']);
    grunt.registerTask('test_collate_sync', ['shell:runNodeunit:sync collate']);
    grunt.registerTask('test_ctype_sync', ['shell:runNodeunit:sync ctype']);
    grunt.registerTask('test_date_sync', ['shell:runNodeunit:sync date']);
    grunt.registerTask('test_daterange_sync', ['shell:runNodeunit:sync daterange']);
    grunt.registerTask('test_durfmt_sync', ['shell:runNodeunit:sync durfmt']);
    grunt.registerTask('test_name_sync', ['shell:runNodeunit:sync name']);
    grunt.registerTask('testmber_sync', ['shell:runNodeunit:sync number']);
    grunt.registerTask('test_maps_sync', ['shell:runNodeunit:sync maps']);
    grunt.registerTask('test_phone_sync', ['shell:runNodeunit:sync phone']);
    grunt.registerTask('test_root_sync', ['shell:runNodeunit:sync root']);
    grunt.registerTask('test_strings-ext_sync', ['shell:runNodeunit:sync strings-ext']);
    grunt.registerTask('test_units_sync', ['shell:runNodeunit:sync units']);
    grunt.registerTask('test_util_sync', ['shell:runNodeunit:sync util']);

    grunt.registerTask('test_address_async', ['shell:runNodeunit:async address']);
    grunt.registerTask('test_calendar_async', ['shell:runNodeunit:async calendar']);
    grunt.registerTask('test_collate_async', ['shell:runNodeunit:async collate']);
    grunt.registerTask('test_ctype_async', ['shell:runNodeunit:async ctype']);
    grunt.registerTask('test_date_async', ['shell:runNodeunit:async date']);
    grunt.registerTask('test_daterange_async', ['shell:runNodeunit:async daterange']);
    grunt.registerTask('test_durfmt_async', ['shell:runNodeunit:async durfmt']);
    grunt.registerTask('test_name_async', ['shell:runNodeunit:async name']);
    grunt.registerTask('testmber_async', ['shell:runNodeunit:async number']);
    grunt.registerTask('test_maps_async', ['shell:runNodeunit:async maps']);
    grunt.registerTask('test_phone_async', ['shell:runNodeunit:async phone']);
    grunt.registerTask('test_root_async', ['shell:runNodeunit:async root']);
    grunt.registerTask('test_strings-ext_async', ['shell:runNodeunit:async strings-ext']);
    grunt.registerTask('test_units_async', ['shell:runNodeunit:async units']);
    grunt.registerTask('test_util_async', ['shell:runNodeunit:async util']);

    grunt.registerTask('test_address_debug', ['shell:runNodeunit:debug address']);
    grunt.registerTask('test_calendar_debug', ['shell:runNodeunit:debug calendar']);
    grunt.registerTask('test_collate_debug', ['shell:runNodeunit:debug collate']);
    grunt.registerTask('test_ctype_debug', ['shell:runNodeunit:debug ctype']);
    grunt.registerTask('test_date_debug', ['shell:runNodeunit:debug date']);
    grunt.registerTask('test_daterange_debug', ['shell:runNodeunit:debug daterange']);
    grunt.registerTask('test_durfmt_debug', ['shell:runNodeunit:debug durfmt']);
    grunt.registerTask('test_name_debug', ['shell:runNodeunit:debug name']);
    grunt.registerTask('testmber_debug', ['shell:runNodeunit:debug number']);
    grunt.registerTask('test_maps_debug', ['shell:runNodeunit:debug maps']);
    grunt.registerTask('test_phone_debug', ['shell:runNodeunit:debug phone']);
    grunt.registerTask('test_root_debug', ['shell:runNodeunit:debug root']);
    grunt.registerTask('test_strings-ext_debug', ['shell:runNodeunit:debug strings-ext']);
    grunt.registerTask('test_units_debug', ['shell:runNodeunit:debug units']);
    grunt.registerTask('test_util_debug', ['shell:runNodeunit:debug util']);
};
