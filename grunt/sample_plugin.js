'user strict';


module.exports = function (grunt) {
    grunt.registerMultiTask('hello', 'my hello task.', function () {
        grunt.log.writeln("hello world plugin!");


        var options = this.options({
            src: this.data.src,
            dest: this.data.dest
        });

        grunt.log.writeln(options.src);
        grunt.log.writeln(options.dest);

    });
}

