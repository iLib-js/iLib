module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        mkdir: {
            all: {
                options: {
                    create: ['export', 'export/docs', 'export/js', 'export/locale', 'export/package', 'export/qt', 'export/src', 'export/tools', 'dist']
                }
            }
        },
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
        copy: {
            dist: {
                files: [
                    {cwd:"export", src: ["**/*"], dest: 'dist', expand: true}
                ]
            }
        },
        clean : {
            build : ['dist', 'export', 'js/output', 'js/locale' ]
        }
  });

    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-move');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-md5sum');

    grunt.registerTask('dist', ['compress', 'md5sum']);
    grunt.registerTask('test', ['mkdir']);
    grunt.registerTask('default', ['test']);
};
