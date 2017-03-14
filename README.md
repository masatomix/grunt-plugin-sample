# grunt-plugin-sample

```bash
$ mkdir grunt-plugin-sample
$ cd $_
$ npm init
$ npm install grunt --save-dev
$ npm install grunt-contrib-uglify --save-dev
```

手で下記の Gruntfile.jsを作成します。

```bash
$ cat Gruntfile.js 
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
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
};

$ mkdir src
```

手で下記のファイルを作成します。

```bash
$ cat src/grunt-plugin-sample.js
console.log("Hello World.");
console.log("Hello World.");

$
$ npm install

$ grunt uglify
Running "uglify:build" (uglify) task
File build/grunt-plugin-sample.min.js created: 14 B → 38 B
>> 1 file created.

Done.
```

実行されました。

ここまでの参考。
* https://github.com/fnobi/grunt-koko
* http://js.studio-kingdom.com/grunt/doc/getting_started
* https://gruntjs.com/getting-started
* http://kokudori.hatenablog.com/entry/2013/04/03/010236
* http://qiita.com/fnobi/items/5590e7e92b4f2bd81d04


