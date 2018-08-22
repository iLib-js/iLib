module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        mkdir: {
            all: {
                options: {
                    create: ['export', 'export/docs', 'export/js', 'export/js/assembled', 'export/locale', 'export/package', 'export/qt', 'export/src', 'export/tools', 'dist']
                }
            },
            prepare: {
                options: {
                    create: ['js/output', 'js/output/reports', 'js/output/js', 'js/output/dyncode', 'js/output/test', 'js/output/jsdoc']
                }
            }
        },
        copy: {
            dist: {
                files: [
                    {cwd:"export", src: ["**/*"], dest: 'dist', expand: true}
                ]
            }
        },
        /*run_java: {
            options: {

            },
            java_command: {
                execOptions: {
                    cwd: ""
                },
                command: "java",
                jarName: "",
                className: "com.ilib.tools.jsa.JSAssemble",
                javaOptions: {
                    "classpath":["project.classpath.jsa"]
                },
                javaArgs: "-l ko-KR"

            }
        },*/
        shell: {
            mkli: {
                command: 'cd js/data; node ../../tools/build/mkli.js'
            },
            compressJson: {

            },
            touch_localeinfoStamp: {
                command:'cd js/data/locale; touch localeinfo.stamp'
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
        /*run_node: {
            geninfo: {
                options: {
                    cwd: 'js/data',
                },
                files: {src: ['tools/build.mkli.js']}
            },
            map:{
                options: {
                    cwd: 'js/test',
                },
                files: {src: ['js/test/maps/nodeunit/testSuite.js']}
            },
        },*/
        compress: {
            tgz: {
                options: {archive: "dist/ilib.tgz"},
                files: [
                    {expand:true, cwd: 'export', src: ["package/*"]}
                ]
            },
            fulltgz: {
                options: {archive: "dist/ilib-<%= pkg.version %>.tgz"},
                files: [
                    {expand:true, cwd: 'export', src: ["js/*", "java/*", "locale/*", "qt/*"]}
                ]
            },
            nodezip: {
                options: {archive: 'dist/ilib-<%= pkg.version %>.zip'},
                files: [
                    {expand:true, cwd: 'export', src: ['js/*', 'java/*', 'locale/*', 'qt/*']}
                ]
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
                files: [
                    {expand:true, cwd: 'export/docs', src: ['jsdoc/*']}
                ]
            },
             doctgz: {
                options: {archive: 'dist/ilib-<%= pkg.version %>-doc.tgz'},
                files: [
                    {expand:true, cwd: 'export/docs', src: ['jsdoc/*']}
                ]
            }
        },
        md5sum: {
            build: {
                files: [
                    {
                        cwd: "dist/",
                        src: ["*.{tgz,zip,jar}"],
                        dest: 'dist/checksum.md5'
                    }
                ]
            }
        },
        clean : {
            build : ['dist', 'export', 'js/output', 'js/locale' ]
        }
  });


    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-move');
    grunt.loadNpmTasks('grunt-md5sum');
    grunt.loadNpmTasks('grunt-shell');
    //grunt.loadNpmTasks('grunt-run-java');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-compress');

    grunt.registerTask('dist', ['compress', 'md5sum']);
    grunt.registerTask('build', ['shell:mkli', 'shell:touch_localeinfoStamp']);
    grunt.registerTask('test', ['mkdir']);
    grunt.registerTask('default', ['test']);

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
