/**
 * Created by masatomix on 2017/03/13.
 */

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        hello: {
            develop: { // registerMultiTask の場合は、ここまでは定義が必要っぽい。
                src: 'source path',
                dest: 'destination path',
            }
        },

    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadTasks('grunt');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);


    grunt.registerTask('mytask', [
        'uglify',
        'hello'
    ]);

};